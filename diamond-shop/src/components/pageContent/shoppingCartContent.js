import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, Divider, Grid } from '@mui/material';
import { routes } from '../../routes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authcontext';

const ShoppingCartContent = () => {
  const [cartItems, setCartItems] = useState([]);
  const depositPercentage = 20; // 20% deposit
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user && user.id) {
        try {
          const response = await fetch(`https://localhost:7251/api/Cart/${user.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch cart items');
          }
          const data = await response.json();
          setCartItems(data);
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
    if (user && cartItemId) {
      try {
        const response = await fetch(`https://localhost:7251/api/CartItem/${cartItemId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }

        const updatedCart = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCart);
      } catch (error) {
        console.error(error);
      }
    } else {
      const updatedCart = cartItems.filter((item, i) => i !== index);
      setCartItems(updatedCart);
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
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

    const order = {
      customerId: user.id,
      totalPrice: parseFloat(calculateTotal()),
      orderDate: new Date().toISOString().split('T')[0],
      orderDetails: cartItems.map(item => ({
        productId: item.productId,
        productName: item.productName,
        productPrice: item.price,
        quantity: 1 // Assuming quantity is 1 for simplicity
      }))
    };

    try {
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

      // Clear the cart after successful order creation
      setCartItems([]);
      sessionStorage.removeItem('cart');
      alert('Order created successfully!');
      navigate(routes.checkout, { state: { orderDetails: order.orderDetails, payments: [{ PaymentID: 1, OrderID: 1, Deposit: calculateTotalDeposit(), Total: calculateTotal() }] } });
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
        <Box sx={{ flex: 1 }}>
          {cartItems.map((item, index) => (
            <Paper key={index} sx={{ padding: 2, marginBottom: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <img
                    src={item.image1}
                    alt={item.productName}
                    style={{ maxWidth: '100%' }}
                  />
                </Grid>
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1">
                      {item.productName}
                    </Typography>
                    <Link onClick={() => handleRemoveItem(index, item.cartItemId)} style={{ fontSize: '80%', color: 'black' }} underline="hover">
                      REMOVE
                    </Link>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    ${item.price.toFixed(2)}
                    <br />
                    Deposit: ${(item.price * depositPercentage / 100).toFixed(2)} (20%)
                    <br />
                    Ring Size: {item.size}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 15 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>SHIPPING</Typography>
              <Typography variant="body2">- Free Shipping Worldwide</Typography>
              <Typography variant="body2">- Overnight Shipping</Typography>
              <Typography variant="body2">- Order Tracking Every step of the way</Typography>
              <Link to="#" underline="hover">More Info...</Link>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>RETURNS</Typography>
              <Typography variant="body2">- 100% Money Back Guarantee</Typography>
              <Typography variant="body2">- Free returns from the US & Canada</Typography>
              <Typography variant="body2">- Fully Insured Returns</Typography>
              <Link to="#" underline="hover">More Info...</Link>
            </Box>
          </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <Typography variant="body1">US & Int. Shipping</Typography>
              <Typography variant="body1">Free</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <Typography variant="body1">Taxes/Duties Estimate</Typography>
              <Typography variant="body1">TBD</Typography>
            </Box>
            <Divider sx={{ marginBottom: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <Typography variant="h6">Deposit</Typography>
              <Typography variant="h6">${calculateTotalDeposit()}</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
              or interest-free installments from ${(calculateTotal() / 3).toFixed(2)} / mo.
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
          <Box sx={{ textAlign: 'left', marginTop: 3 }}>
            <Typography variant="body2">24/7 Customer Service</Typography>
            <Typography variant="body2">1-800-242-2728</Typography>
            <Link to="#" underline="hover">Chat With Us</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoppingCartContent;
