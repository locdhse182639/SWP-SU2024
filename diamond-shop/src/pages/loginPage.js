import * as React from 'react';
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
import logo from '../constant/logo.png';
import '../css/loginPage.css';
import { routes } from '../routes';
import { useAuth } from '../components/authcontext';

const defaultTheme = createTheme();

export default function SignIn() {
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    try {
      const response = await fetch('https://localhost:7236/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      const token = result.token;
      const roleId = result.roleId;

      login(token);

      if (roleId === 5) {
        window.location.href = '/';
      } else {
        window.location.href = '/dashboardPage';
      }

    } catch (error) {
      alert('Login failed. Please check your username and password.');
    }
  };

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
              sx={{ m: 1, bgcolor: 'transparent' }}
              src={logo}
            />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                sx={{ '& .MuiInputBase-root': { color: 'black' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ '& .MuiInputBase-root': { color: 'black' } }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ color: 'black' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
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
                  {"Don't have an account? "}
                  <Link href={routes.register} variant="body2" sx={{ color: 'black', fontSize: '16px' }}>
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
