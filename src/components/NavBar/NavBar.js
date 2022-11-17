import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


/* Nav Bar element */



export default function NavBar() {
    return (
        <AppBar position="static" sx={{bgcolor: 'black'}}>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h5" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
                Sales 360            
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    )
}