import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { loginWithCredentials, SIGN_IN_SUCCESS } from './actions';
import { Alert, AlertTitle } from '@mui/material';
import Copyright from '../UIUtils/Copyright';
import { useDispatch, useSelector } from 'react-redux';

const theme = createTheme();

const signInSelector = (state) => state.signInReducer;

export default function SignInPage() {

    const dispatch = useDispatch();

    const signInReducerState = useSelector(signInSelector);

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    React.useEffect(() => {
        const token = sessionStorage.getItem('auth-token');
        if (token) {
            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: token
            })
            navigate('/dashboard')
        }
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = {
            email: formData.email,
            password: formData.password
        };

        dispatch(loginWithCredentials(requestBody, navigate));
    };

    // if (signInReducerState?.success && signInReducerState?.payload) {
    //     navigate('/dashboard');
    // }

    return (
        <ThemeProvider theme={theme}>
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {
                        signInReducerState?.error && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            <strong>{signInReducerState?.message}</strong>
                        </Alert>
                    }
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={(event) => {
                                setFormData((formData) => {
                                    return {
                                        ...formData,
                                        email: event.target.value
                                    }
                                })
                            }}
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
                            value={formData.password}
                            onChange={(event) => {
                                setFormData((formData) => {
                                    return {
                                        ...formData,
                                        password: event.target.value
                                    }
                                })
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" className='custom-link-style' variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" className='custom-link-style' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}