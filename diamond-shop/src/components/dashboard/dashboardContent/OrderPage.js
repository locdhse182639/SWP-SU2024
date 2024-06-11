import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DashboardNav from './DashboardNav';
import './OrderPage.css';
import SiteNav from './../../staffsite/StaffNav';
import { useAuth } from '../../authcontext';

// Generate Order Data
function createData(id, customerID, totalPrice, orderDate, orderDetailID) {
  return { id, customerID, totalPrice, orderDate, orderDetailID };
}

const orderData = [
  createData(0, 'Elvis Presley', 312.44, '16 Mar, 2019', 'OD001'),
  createData(1, 'Paul McCartney', 866.99, '16 Mar, 2019', 'OD002'),
  createData(2, 'Tom Scholz', 100.81, '16 Mar, 2019', 'OD003'),
  createData(3, 'Michael Jackson', 654.39, '16 Mar, 2019', 'OD004'),
  createData(4, 'Bruce Springsteen', 212.79, '15 Mar, 2019', 'OD005'),
];

// Sample order detail data
const orderDetails = {
  OD001: [
    { productName: 'Product A', quantity: 1, price: 100.00 },
    { productName: 'Product B', quantity: 2, price: 106.22 }
  ],
  OD002: [
    { productName: 'Product C', quantity: 3, price: 200.00 },
    { productName: 'Product D', quantity: 1, price: 66.99 }
  ],
  OD003: [
    { productName: 'Product E', quantity: 1, price: 100.81 }
  ],
  OD004: [
    { productName: 'Product F', quantity: 1, price: 654.39 }
  ],
  OD005: [
    { productName: 'Product G', quantity: 1, price: 100.00 },
    { productName: 'Product H', quantity: 1, price: 112.79 }
  ],
};

const OrderPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  const handleViewDetails = (orderId) => {
    setSelectedOrder(orderId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReleaseBill = () => {
    console.log('Bill Released');
    // Add your bill release logic here
    setOpen(false);
  };

  const { user } = useAuth();
  console.log('User Role ID:', user?.roleId);

  return (
    <div>
      <div>
        {user && user.roleId === 3 ? (
          <SiteNav />
        ) : (
          <DashboardNav />
        )}
      </div>

      <Container className='container-2'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">OrderID</TableCell>
                <TableCell align="center">CustomerID</TableCell>
                <TableCell align="center">Total Price ($)</TableCell>
                <TableCell align="center">Order Date</TableCell>
                <TableCell align="center">Order DetailID</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.customerID}</TableCell>
                  <TableCell align="center">{row.totalPrice}</TableCell>
                  <TableCell align="center">{row.orderDate}</TableCell>
                  <TableCell align="center">{row.orderDetailID}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewDetails(row.orderDetailID)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Dialog open={open} onClose={handleClose} classes={{ paper: 'dialog-container' }}>
        <DialogTitle className="dialog-title">Order Details</DialogTitle>
        <DialogContent className="dialog-content">
          {selectedOrder && (
            <TableContainer component={Paper}>
              <Table className="dialog-table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails[selectedOrder].map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" className="dialog-table-cell">{item.productName}</TableCell>
                      <TableCell align="center" className="dialog-table-cell">{item.quantity}</TableCell>
                      <TableCell align="center" className="dialog-table-cell">{item.price}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="total-price-row">
                    <TableCell colSpan={2} align="right">Total Price</TableCell>
                    <TableCell align="center">
                      {orderDetails[selectedOrder].reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleClose} color="primary" className="dialog-button">
            Close
          </Button>
          <Button onClick={handleReleaseBill} color="primary" variant="contained" className="dialog-button">
            Release Bill
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderPage;
