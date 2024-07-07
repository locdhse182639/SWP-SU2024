import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DashboardNav from './DashboardNav';

const RevenuePage = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`https://luxehouse.azurewebsites.net/api/Payment`);
                if (response.ok) {
                    const data = await response.json();
                    setInvoices(data);
                } else {
                    console.error("Failed to fetch payment data");
                }
            } catch (error) {
                console.error("Error fetching payment data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

    const totalRevenue = invoices.reduce((acc, invoice) => acc + (invoice.total || 0), 0);

    return (
        <div>
            <DashboardNav />
            <Container className='container'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Invoice ID</TableCell>
                                    <TableCell align="center">Total ($)</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.paymentId}>
                                        <TableCell align="center">{new Date(invoice.datePaid).toLocaleDateString()}</TableCell>
                                        <TableCell align="center">{invoice.paymentId}</TableCell>
                                        <TableCell align="center">{invoice.total}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" color="primary">
                                                View Invoice
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={2} align="center">
                                        <strong>Total Revenue:</strong>
                                    </TableCell>
                                    <TableCell align="center" colSpan={2}>
                                        <strong>${totalRevenue}</strong>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>
            <Button
                className="add-product-button"
                variant="contained"
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    height: '56px',
                    width: '56px',
                }}
            >
                <LocalPrintshopOutlinedIcon />
            </Button>
        </div>
    );
};

export default RevenuePage;
