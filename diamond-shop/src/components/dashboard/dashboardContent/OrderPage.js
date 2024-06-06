import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import DashboardNav from './DashboardNav';
import './OrderPage.css';
// Generate Order Data
function createData(id, date, customerID, totalPrice, orderDate, orderDetailID) {
  return { id, date, customerID, totalPrice, orderDate, orderDetailID };
}

const orderData = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    312.44,
    '16 Mar, 2019',
    'OD001'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    866.99,
    '16 Mar, 2019',
    'OD002'
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 100.81, '16 Mar, 2019', 'OD003'),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    654.39,
    '16 Mar, 2019',
    'OD004'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    212.79,
    '15 Mar, 2019',
    'OD005'
  ),
];

const OrderPage = () => {
  const handleViewDetails = (orderId) => {
    // Handle the logic for viewing details
    console.log(`View details for order ${orderId}`);
  };

  return (
    <div>
      <DashboardNav />
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
                    onClick={() => handleViewDetails(row.id)}
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
    </div>
  );
};

export default OrderPage;
