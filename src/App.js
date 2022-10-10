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
               
      

        {/* High-Level Widgets */}
        <Container sx = {{ p: '2' }}>
          <Grid container spacing={12} justifyContent="center">
            <Grid item xs={2}>
              <Container sx={{ bgcolor: '#F8F8F8', height: '10vh', width: '200px', boxShadow: '1', borderRadius: '5px' }}>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                  Total Crimes          
                </Typography>
              </Container>          
            </Grid>
          </Grid>
        </Container>


      {/* Total Crimes High-Level Widget */}
        <Container sx={{bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '300px'}}>
          
          <Box sx={{ color: '#46505A' }}>Total Crimes</Box>

          <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>
            128.3 K
          </Box>

          <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>
            +10%
          </Box>

          <Box sx={{ color: '#46505A', display: 'inline', fontSize: 14 }}>
            vs. last month
          </Box>

        </Container>

    </div>
  );
}

export default App;
