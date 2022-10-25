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
import BarChart from './components/BarChart/BarChart';
import PieChart from './components/PieChart/PieChart';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import AreaChart from './components/AreaChart/AreaChart';




function App() {
  return (
    <div className="App">
    
    <NavBar></NavBar>

      
      {/* High-Level Widgets */}
      <Grid container spacing={4} padding="4vh" justify="center" align="center" direction="row">
        
        {/* Total Crimes High-Level Widget */}
        <Grid item xs={3}>
          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 2, width: '400px', height: '150px'}}>
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
          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 2, width: '400px', height: '150px'}}>       
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
          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 2, width: '400px', height: '150px'}}>       
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
          <Container sx={{display: 'flex', justifyContent: 'center',alignItems: 'center', bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 2, width: '400px', height: '150px'}}>       
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
        
        <PieChart></PieChart>
        <BarChart></BarChart>
        <AreaChart></AreaChart>
        <Main></Main>
        
      </Grid>

  {/*End of React content*/}
        
    </div>
  );
}

export default App;
