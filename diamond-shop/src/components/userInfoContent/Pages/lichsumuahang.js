import React from 'react';
import { Box, Button, Typography, Tabs, Tab, Breadcrumbs } from '@mui/material';
import { routes } from '../../../routes';
import { Link } from 'react-router-dom';

function OrderHistory() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Tabs value={value} onChange={handleChange} aria-label="order tabs">
        <Tab label="All" />
        <Tab label="New orders" />
        <Tab label="Delivering" />
        <Tab label="Completed" />
        <Tab label="Cancel" />
      </Tabs>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6">Latest orders</Typography>
        {/* Order content here */}
      </Box>
    </Box>
  );
}

export default OrderHistory;
