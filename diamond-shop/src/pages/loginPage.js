import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../components/navBar';
import logo from '../constant/logo.png'; // Import logo
import '../css/loginPage.css'
import { routes } from '../routes';
import React, { useState } from "react";
import { authenticateUser } from '../components/services/auth/login';
import { Form, useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Luxe Jewel House
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();

  console.log(username)
  console.log(password)


  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    const user = authenticateUser(username, password);
    console.log("handleSubmit cliked")
    console.log(user)
    if (user) {
      navigate(routes.homePage)
    }
    else {
      setError("Invalid username or password");
      navigate(routes.login)
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault(); //chan hanh dong cua nguoi dung
  }

  return (
    <div>
      <NavBar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: 'transparent' }} // Make background transparent
              src={logo} // Use logo
            //   src='../assets/logo/logo.png'
            />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                // id="email"
                id="username"
                value={username}
                label="User Name"
                type='text'
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
                sx={{ '& .MuiInputBase-root': { color: 'black' } }} // Change text color
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{ '& .MuiInputBase-root': { color: 'black' } }} // Change text color
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ color: 'black' }} // Change text color
              />
              {error && <div style={{ color: 'red' }} className='error-msg'>{error}</div>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'black' }} // Change button color
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: 'black', fontSize: '16px' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  "Don't have an account?&thinsp;
                  <Link href={routes.register} variant="body2" sx={{ color: 'black', fontSize: '16px' }}>
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
