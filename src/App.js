import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/MenuItem';


function App() {
  return (
    <div className="App">
      
      {
      /* Nav Bar element */
      }
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Crime Analysis Dashboard
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      
      

    </div>
  );
}

export default App;
