import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import logo from '../constant/logo.png';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

const PasswordReset = () => {
    return (
        <Container maxWidth="xs">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
                <Box sx={{ width: '100%', padding: 3, border: '1px solid #ddd', borderRadius: 2, boxShadow: 3 }}>
                    <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                        <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} /> {/* Adjust the maxWidth as needed */}
                    </Box>
                    <Typography style={{ textAlign: 'center' }} variant="h5" component="h1" gutterBottom>
                        Forgot Your Password?
                    </Typography>
                    <Typography style={{ textAlign: 'center' }} variant="body1" gutterBottom>
                        Enter your email and we'll send you OTP code to reset your password.
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                width: '80%', // Adjust the width percentage as needed
                                backgroundColor: 'black',
                                color: 'white',
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: 'gray',
                                    color: 'white'
                                }
                            }}
                        >
                            Send OTP Code
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                        <Box sx={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                        <Typography sx={{ mx: 2, color: 'gray' }}>OR</Typography>
                        <Box sx={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
                    </Box>
                    <div style={{ textAlign: 'center' }}>
                        <Link
                            to={routes.register}>
                            Create new account.
                        </Link><br />
                        <Link
                            to={routes.login}>
                            Back to login.
                        </Link>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default PasswordReset;
