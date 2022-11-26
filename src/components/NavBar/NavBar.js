import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountCircle from '@mui/icons-material/AccountCircle';


/* Nav Bar element */



export default function NavBar() {
    return (
        <AppBar position="static" sx={{bgcolor: 'black'}}>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h5" fontWeight="light" component="div" sx={{ flexGrow: 1 }}>
                <PointOfSaleIcon/>
                Sales 360            
            </Typography>
            

            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                    <AccountCircle />
                    <Button color="inherit">Login</Button>
            </IconButton>

        </Toolbar>
    </AppBar>
    )
}