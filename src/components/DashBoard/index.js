import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../UIUtils/ListItems/listItems';

import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from '../UIUtils/Drawer';
import { AppBar } from '../UIUtils/AppBar';
import { CLEAR_ALL_USER, getUserDetails } from './actions';
import { useNavigate } from 'react-router';
import IndividualDashboard from '../IndividualDashboard';
import { CLEAR_ALL_INFO, SIGN_IN_SUCCESS } from '../SignInPage/actions';
import { Button } from '@mui/material';

const mdTheme = createTheme();

const signInSelector = (state) => state.signInReducer;
const userSelector = (state) => state.userReducer;

export default function Dashboard() {
    const signInReducerState = useSelector(signInSelector);

    const userReducerState = useSelector(userSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('auth-token')
        if (userReducerState.self.error && !token) {
            navigate('/signin')
        }

        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: token
        })

        dispatch(getUserDetails(signInReducerState?.token));
    }, [])

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    if (userReducerState.self.error || userReducerState.self.loading) {
        return <></>;
    }

    const location = userReducerState?.self?.payload?.location && userReducerState?.self?.payload?.location.split(',')
    const latitude = location[0] && location[0].trim();
    const longitude = location[1] && location[1].trim();

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() => {
                                sessionStorage.removeItem('auth-token')
                                dispatch({type: CLEAR_ALL_USER})
                                dispatch({type: CLEAR_ALL_INFO})
                                navigate('/signin')
                            }}
                        >
                            Sign Out
                        </Button>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>

                <Toolbar />
                <Box sx={{ width: '100%' }} mt={8}>
                    <br />
                    Name: {userReducerState?.self?.payload?.name}
                    <br />
                    Type: {userReducerState?.self?.payload?.user_type}
                    <br />
                    BloodGroup: {userReducerState?.self?.payload?.blood_group}
                    <br />
                    <IndividualDashboard
                        latitude={latitude}
                        longitude={longitude}
                        blood_group={userReducerState?.self?.payload?.blood_group}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}