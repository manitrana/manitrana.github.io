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
import { Box } from "@mui/material";
import CycloneIcon from '@mui/icons-material/Cyclone';


/* Nav Bar element */



export default function NavBar() {
    return (
        <AppBar position="static" sx={{bgcolor: '#0075b0', boxShadow: 0}}>
        <Toolbar>
            {/*             <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon/>
            </IconButton>
            */}

            <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
                <CycloneIcon fontSize="large" sx={{paddingRight: '1vh'}}/>
                <Typography paddingTop="0.4vh" color="white" fontFamily="Nunito" variant="h6" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
                    
                    Sales 360            
                </Typography>
            </Box>

            
            <Box sx={{display: 'flex', paddingLeft: '140vh'}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit">
                        <AccountCircle />
                        <Button color="inherit">Login</Button>
                </IconButton>
            </Box>

            

        </Toolbar>
    </AppBar>
    )
}