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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { routes } from '../routes';
import NavBar from '../components/navBar';
import logo from '../constant/logo.png'; // Import logo
import { useFormik } from 'formik';
import * as Yup from 'yup';


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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agree: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values))
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      lastName: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
    }),

  });

  return (
    <div>
      <NavBar></NavBar>
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
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}

            <Avatar
              sx={{ m: 1, bgcolor: 'transparent' }} // Make background transparent
              src={logo} // Use logo
            //   src='../assets/logo/logo.png'
            />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleChange} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    autoFocus
                  />
                  {formik.errors.firstName && (<Typography variant="caption" color="red">{formik.errors.firstName}</Typography>)}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName && (<Typography variant="caption" color="red">{formik.errors.lastName}</Typography>)}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    toggleMask
                  />
                  {formik.errors.password && (<Typography variant="caption" color="red">{formik.errors.password}</Typography>)}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Already have an account?&thinsp;
                  <Link href={routes.login} variant="body2" sx={{ color: 'black', fontSize: '16px' }}>
                    Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}