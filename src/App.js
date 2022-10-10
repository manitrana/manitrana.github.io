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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      
      {
      /* Nav Bar element */
      }

        {/* Dark Mode Theme code */}
        
        {/* 
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <main>This app is using the dark mode</main>
        </ThemeProvider>
        */}


        {/* NAVBAR */}
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h5" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
              Crime Analysis Dashboard
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>


      
      {/* High-Level Widgets */}
      <Grid container spacing={4} padding="4vh" justify="center" align="center" direction="row">
        
        {/* Total Crimes High-Level Widget */}
        <Grid item xs={3}>
          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '400px', height: '150px'}}>
            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Crimes</Box>
              <Box sx={{color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>128.3 K</Box>
              <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>+10%</Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
            </Box>
          </Container>
        </Grid>

        {/* Violent Crimes High-Level Widget */}
        <Grid item xs={3}>
          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '400px', height: '150px'}}>       
            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Violent Crimes</Box>
              <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>47.1 K</Box>
              <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>+7%</Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
            </Box>
          </Container>
        </Grid>

        {/* Assaults High-Level Widget */}
        <Grid item xs={3}>
          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '400px', height: '150px'}}>       
            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Assaults</Box>
              <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>20 K</Box>
              <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>+17%</Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
            </Box>
          </Container>
        </Grid>

        {/* Robberies High-Level Widget */}
        <Grid item xs={3}>
          <Container sx={{display: 'flex', justifyContent: 'center',alignItems: 'center', bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '400px', height: '150px'}}>       
            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Robberies</Box>
              <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>20 K</Box>
              <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>+17%</Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
            </Box>
          </Container>
        </Grid>

      </Grid>
        
      {/* Interactive Data Charts */}
      <Grid container spacing={1} padding="2vh">
        <Container sx={{bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '900px', height: '400px'}}>
          <Box sx={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold', color: '#46505A' }}>Regional Analysis</Box>
        </Container>

        <Container sx={{bgcolor: 'spacegray', boxShadow: 1, borderRadius: 2, p: 2, width: '900px', height: '400px'}}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold', color: '#46505A' }}>Trend: last 10 years</Box>
        </Container>
      </Grid>

        
    </div>
  );
}

export default App;
