import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';
import { routes } from '../../routes';

export default function Revenue() {
  const [totalRevenue, setTotalRevenue] = React.useState(0);
  const [lastUpdate, setLastUpdate] = React.useState('');

  React.useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:7251/api/Orders');
        const orders = response.data;

        // Calculate the total revenue
        const total = orders.reduce((sum, order) => sum + order.totalPrice, 0);

        // Get the last update date
        const lastOrderDate = orders.length > 0 ? orders[orders.length - 1].orderDate : '';

        setTotalRevenue(total);
        setLastUpdate(lastOrderDate);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Revenue</Title>
      <Typography component="p" variant="h4">
        {totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} VND
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {new Date(lastUpdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </Typography>
      <div>
        <Link color="primary" href={routes.revenuePage}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
