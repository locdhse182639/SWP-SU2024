import React, { useState, useEffect } from 'react';
import {
  Box, Button, Typography, Tabs, Tab, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { routes } from '../../../routes';

const StyledTabs = styled(Tabs)({
  '& .MuiTab-root': {
    color: 'black',
    '&.Mui-selected': {
      color: 'blue',
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'blue',
  },
});

function OrderHistory() {
  const [value, setValue] = useState(0);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://luxehouse.azurewebsites.net/api/Orders'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const fetchOrderDetails = async (orderId) => {
    try {
      const response = await fetch(`https://luxehouse.azurewebsites.net/api/Orders/${orderId}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch order details');
      }
      const data = await response.json();
      setOrderDetails(data.orderDetails || []);
      setSelectedOrder(data);
      setOpen(true);
    } catch (err) {
      console.error('Error fetching order details:', err);
    }
  };

  const handleOrderClick = (orderId) => {
    fetchOrderDetails(orderId);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to={routes.homePage}>
          Home Page
        </Link>
        <Typography color="text.primary">Purchase history</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Order
      </Typography>
      <StyledTabs value={value} onChange={handleChange} aria-label="order tabs">
        <Tab label="All" />
        <Tab label="New orders" />
        <Tab label="Delivering" />
        <Tab label="Completed" />
        <Tab label="Cancel" />
      </StyledTabs>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6">Latest orders</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">OrderID</TableCell>
                <TableCell align="center"></TableCell> {/* Empty header for product image */}
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Total Price ($)</TableCell>
                <TableCell align="center">Order Date</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                order.orderDetails ? order.orderDetails.map((detail, index) => (
                  <TableRow key={`${order.orderId}-${index}`}>
                    <TableCell align="center">{index === 0 ? order.orderId : ''}</TableCell>
                    <TableCell align="center">
                      {detail.product && (
                        <img src={detail.product.image1} alt={detail.product.productName} style={{ width: '50px', height: '50px' }} />
                      )}
                    </TableCell>
                    <TableCell align="center">{detail.product ? detail.product.productName : 'N/A'}</TableCell>
                    <TableCell align="center">{order.totalPrice ? order.totalPrice.toFixed(2) : 'N/A'}</TableCell>
                    <TableCell align="center">{new Date(order.orderDate).toLocaleDateString()}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOrderClick(order.orderId)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow key={order.orderId}>
                    <TableCell align="center">{order.orderId}</TableCell>
                    <TableCell align="center" colSpan={4}>No details available</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOrderClick(order.orderId)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && orderDetails.length > 0 ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{item.productName}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="center">{item.productPrice}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2} align="right">Total Price</TableCell>
                    <TableCell align="center">
                      {orderDetails.reduce((acc, item) => acc + item.productPrice * item.quantity, 0).toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default OrderHistory;

