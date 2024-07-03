import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, Divider, Grid } from '@mui/material';
import { routes } from '../../routes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authcontext';
import { jwtDecode } from 'jwt-decode';
import ProductQuantity from '../productQuantity';

const ShoppingCartContent = () => {
  const [cartItems, setCartItems] = useState([]);
  const depositPercentage = 20; // 20% deposit
  const { user } = useAuth();
  const navigate = useNavigate();

  const decodedToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      console.log(decoded)
      return decoded.unique_name;  // Adjust this to match your token's structure
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user && user.token) {
        try {
          const userId = decodedToken(user.token);
          const response = await fetch(`https://localhost:7251/api/Cart/User/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch cart items');
          }
          const data = await response.json();
          console.log('Cart Data:', data); // Log the response data
          setCartItems(data.cartItems); // Ensure the correct path to cartItems in the response
        } catch (error) {
          console.error(error);
        }
      } else {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCartItems(cart);
      }
    };

    fetchCartItems();
  }, [user]);

  const handleRemoveItem = async (index, cartItemId) => {
    console.log('Removing item:', index, cartItemId); // Add logging to debug

    if (user && cartItemId) {  // Ensure the user is authenticated and the cart item has an ID
      try {
        const response = await fetch(`https://localhost:7251/api/CartItem/${cartItemId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }

        // Remove item from local state
        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);

        // Check if the cart is empty and delete the cart if it is
        if (updatedCart.length === 0) {
          const userId = decodedToken(user.token);
          const cartResponse = await fetch(`https://localhost:7251/api/Cart/User/${userId}/Count`);
          if (cartResponse.ok) {
            const itemCount = await cartResponse.json();
            if (itemCount === 0) {
              const cart = await fetch(`https://localhost:7251/api/Cart/User/${userId}`).then(res => res.json());
              await fetch(`https://localhost:7251/api/Cart/${cart.cartID}`, {
                method: 'DELETE',
              });
            }
          }
        }
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    } else {
      console.error('User or cartItemId does not exist', user, cartItemId); // Add logging to debug
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const calculateTotalDeposit = () => {
    return cartItems.reduce((total, item) => total + (item.price * depositPercentage / 100), 0).toFixed(2);
  };

  const handleCheckout = async () => {
    if (!user) {
      navigate(routes.login);
      return;
    }
  
    try {
      // Fetch customer ID based on the user ID
      const userId = decodedToken(user.token);
      const customerResponse = await fetch(`https://localhost:7251/api/Customers/User/${userId}`);
      if (!customerResponse.ok) {
        throw new Error('Failed to fetch customer data');
      }
      const customerData = await customerResponse.json();
  
      const order = {
        userId: userId,
        totalPrice: parseFloat(calculateTotal()),
        orderDate: new Date().toISOString(),
        orderDetails: cartItems.map(item => ({
          productId: item.product.productId,
          productName: item.product.productName,
          productPrice: item.price,
          quantity: item.quantity
        }))
      };
  
      const response = await fetch('https://localhost:7251/api/Orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
  
      const createdOrder = await response.json(); // Assuming the response contains the created order with orderId
  
      // Create an OrderLog entry with Phase1 set to false
      const orderLog = {
        orderID: createdOrder.orderId,
        phase1: false,
        phase2: false,
        phase3: false,
        phase4: false,
        timePhase1: new Date().toISOString(),
        timePhase2: new Date().toISOString(),
        timePhase3: new Date().toISOString(),
        timePhase4: new Date().toISOString()
      };
  
      const logResponse = await fetch('https://localhost:7251/api/OrderLogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderLog),
      });
  
      if (!logResponse.ok) {
        throw new Error('Failed to create order log');
      }
  
      // Clear the cart after successful order creation
      setCartItems([]);
      alert('Order created successfully!');
      navigate(`${routes.checkout}?orderId=${createdOrder.orderId}`); // Pass the orderId to the OrderComponent
    } catch (error) {
      console.error(error);
      alert('Failed to create order');
    }
  };


  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', margin: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Link to={routes.homePage} style={{ fontSize: '80%', color: 'black' }} underline="hover">
          <ArrowBackIosIcon style={{ width: '3%', height: '3%' }} />
          CONTINUE SHOPPING
        </Link>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Typography variant="h6">MY CART ({cartItems.length} ITEM{cartItems.length !== 1 ? 'S' : ''})</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'start' }}>
        <Box sx={{ flex: 1, paddingRight: '2%' }}>
          {cartItems.map((item, index) => (
            <Paper key={index} sx={{ padding: 2, marginBottom: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <img
                    src={item.product.image1}
                    alt={item.product.productName}
                    style={{ maxWidth: '100%' }}
                  />
                </Grid>
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1">
                      {item.product.productName}
                    </Typography>
                    <Link onClick={() => handleRemoveItem(index, item.cartItemID)} style={{ fontSize: '80%', color: 'black' }} underline="hover">
                      REMOVE
                    </Link>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    ${item.price.toFixed(2)}
                    <br />
                    Deposit: ${(item.price * depositPercentage / 100).toFixed(2)} (20%)
                    <br />
                    Ring Size: {item.product.size}
                  </Typography>
                  <ProductQuantity />
                </Grid>
              </Grid>
            </Paper>
          ))}

          
        </Box>
        <Box>
          <Paper sx={{ padding: 2, maxWidth: 400, marginLeft: 'auto' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>SUMMARY</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1">${calculateTotal()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <Typography variant="body1">Deposit Total</Typography>
              <Typography variant="body1">${calculateTotalDeposit()}</Typography>
            </Box>
            <Divider sx={{ marginBottom: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <Typography variant="h6">Deposit</Typography>
              <Typography variant="h6">${calculateTotalDeposit()}</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                                                                                     
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ marginBottom: 1, backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }}
              onClick={handleCheckout}
            >
              CHECKOUT
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoppingCartContent;
