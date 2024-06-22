import React from 'react';
import { Box, Paper, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../constant/white_logo_no_bg.png'

const ChatPopup = ({ setIsOpenPopup }) => {
    const handleClose = () => {
        console.log("Close button clicked");
        setIsOpenPopup(false);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1000
            }}
        >
            <Paper elevation={3} style={{ maxWidth: '450px', width: '100%', height: '650px', position: 'relative', marginBottom: '17%',borderRadius: '20px' }}>
                <IconButton
                    onClick={handleClose}
                    style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}
                >
                    <CloseIcon />
                </IconButton>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', backgroundColor: '#212121', borderRadius: '20px', height: '250px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '3%' }}>
                            <img src={logo} alt="Tierra Logo" style={{ width: '50px', marginBottom: '10px' }} />
                        </div>
                        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Luxe Jewel House</Typography>
                        <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>
                            Chào mừng bạn đến với Luxe Jewel House. Vui lòng nhập thông tin trước khi bắt đầu trò chuyện
                        </Typography>
                    </div>
                    <form noValidate autoComplete="off" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height: '430px', borderRadius: '10px', marginTop: '-45px', backgroundColor: 'white' }}>
                        <TextField
                            style={{ width: '90%', margin: 'auto' }}
                            required
                            label="Tên của bạn"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            style={{ width: '90%', margin: 'auto' }}
                            required
                            label="Số điện thoại của bạn"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            style={{ width: '90%', margin: 'auto' }}
                            label="Email của bạn"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            style={{ width: '90%', margin: 'auto' }}
                            required
                            label="Tin nhắn"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px', width: '80%', margin: 'auto' }}
                        >
                            Gửi tin nhắn
                        </Button>
                    </form>
                </Box>
            </Paper>
        </Box>
    );
};

export default ChatPopup;
