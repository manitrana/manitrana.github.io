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
import ProductsDataTable from './components/ProductsDataTable/ProductsDataTable';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import AreaChart from './components/AreaChart/AreaChart';
import Papa from 'papaparse';
import * as d3 from 'd3';
import { Line } from 'react-chartjs-2';
import records from "./socrata_metadata.json";
import { useEffect, useRef, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DistributorDataTable from './components/DistributorDataTable/DistributorDataTable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import Groups3Icon from '@mui/icons-material/Groups3';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { Chip } from '@mui/material';

function App() {
  
  fetch("./socrata_metadata.json")
  .then((response) => response.json())
  .then((findresponse)=> {
    this.setState({
      data:findresponse
    })
  })

  

  return (
    <div className="App">
      
      

      <NavBar></NavBar>
      
      

      {/* High-Level Widgets */}
      <Grid container spacing={4} padding="4vh" justify="center" align="center" direction="row">
        
        {/* Total Crimes High-Level Widget */}
        <Grid item xs={3}>
          <Container sx=
          {{
            display: 'flex', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            bgcolor: 'white', 
            border: '2px solid whitesmoke', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>

            <Box>
                <HandshakeIcon fontSize='large' sx={{color: '#0075B0'}}/>
            </Box>

            <Box>
              
              <Box sx={{ color: '#46505A' }}>Total Sales</Box>

              <Box sx={{color: '#0075B0', fontSize: 24, fontWeight: 'medium' }}>1,284,12 K</Box>
              
              
              
            </Box>

            <Box>
              <Chip size="small" color="success" icon={<ArrowUpwardIcon />} label="10%"/>
            </Box>
          </Container>
        </Grid>

        {/* Violent Crimes High-Level Widget */}
        <Grid item xs={3}>
          <Container sx=
          {{
            display: 'flex', 
            justifyContent: 'flex-start',
            alignItems: 'center', 
            bgcolor: 'white', 
            border: '2px solid whitesmoke', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>   

            

            <Grid sx={{display: 'flex'}}>

              <Box sx={{order: '1'}}>
                <RequestQuoteIcon fontSize='large' sx={{color: '#995D81'}}/>
              </Box>

              <Box sx={{order: '2'}}>
                <Box sx={{ color: '#46505A' }}>Total Revenue</Box>
                <Box sx={{ color: '#995D81', fontSize: 24, fontWeight: 'medium' }}>$ 589,287,189</Box>
              </Box>
              
              <Box sx={{order: '3', justifyContent: 'flex-end'}}>
                <Chip size="small" color="error" icon={<ArrowDownwardIcon />} label="7%"/>
              </Box>

            </Grid>
            
          </Container>
        </Grid>

        {/* Assaults High-Level Widget */}
        <Grid item xs={3}>
          <Container sx=
          {{
            display: 'flex', 
            justifyContent: 'flex-start', 
            bgcolor: 'white', 
            border: '2px solid whitesmoke', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>       
            
            <Box>
              <InventoryIcon fontSize='large' sx={{color: '#0075B0'}}/>
            </Box>

            <Box>
              <Box sx={{ color: '#46505A' }}>Total Products Sold</Box>
              <Box sx={{ color: '#0075B0', fontSize: 24, fontWeight: 'medium' }}>20 K</Box>
            </Box>

            <Box>
              <Chip size="small" color="error" icon={<ArrowDownwardIcon />} label="4%"/>
            </Box>

          </Container>
        </Grid>

        {/* Robberies High-Level Widget */}
        <Grid item xs={3}>
          <Container sx=
          {{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            bgcolor: 'white', 
            border: '1px solid ghostwhite', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>     

            <Box>
              <Groups3Icon fontSize='large' sx={{color:'#995D81'}}/>
            </Box>

            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Distributors</Box>
              <Box sx={{ color: '#995D81', fontSize: 24, fontWeight: 'medium' }}>20 K</Box>
            </Box>

            <Box>
              <Chip size="small" color="success" icon={<ArrowDownwardIcon />} label="6%"/>
            </Box>

          </Container>
        </Grid>

      </Grid>
        



      {/* Interactive Data Charts */}
      <Grid marginRight="10vh" marginLeft="10vh" marginBottom="5vh" display="flex" justifyContent="flex-start">
        
        {/* Importing all components */}
        
      
      </Grid>

      <Grid display="flex" justify="center" direction="row" margin="2vh">
        <Container>
          <BarChart></BarChart>
        </Container>
        <Container>
          <AreaChart></AreaChart>
        </Container>
        
      </Grid>

      <Grid display="flex" justify="center" direction="row" margin="2vh">
        <Container>
          <ProductsDataTable></ProductsDataTable>
        </Container>
        <Container>
          <DistributorDataTable></DistributorDataTable>
        </Container>
        
      </Grid>
      
    

      
      

  {/*End of React content*/}
        
    </div>
  );
}

export default App;
