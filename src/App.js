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
            border: '1px solid ghostwhite', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>

            <Box>
                <HandshakeIcon fontSize='large'/>
            </Box>

            <Box>
              
              <Box sx={{ color: '#46505A' }}>Total Sales</Box>

              <Box sx={{color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>128.3 K</Box>
              
              <Box sx={{display: 'flex', direction: 'row'}}>
                <ArrowUpwardIcon sx={{color: '#009688'}}/>
                <Box sx={{ color: '#009688', fontWeight: 'bold', fontSize: 14,}}>
                  10%
                </Box>
                <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>
                  vs. last month
                </Box>
              </Box>
              
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
            border: '1px solid ghostwhite', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>   

            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Revenue</Box>
              <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>47.1 K</Box>
              <Box sx={{ color: 'red', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>
                <ArrowDownwardIcon/>
                7%
              </Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
            </Box>
          </Container>
        </Grid>

        {/* Assaults High-Level Widget */}
        <Grid item xs={3}>
          <Container sx=
          {{
            display: 'flex', 
            justifyContent: 'flex-start', 
            bgcolor: 'white', 
            border: '1px solid ghostwhite', 
            borderRadius: 2, 
            p: 2, 
            width: '400px', 
            height: '150px'}}>       
            <Box>
              <Box sx={{ color: '#46505A' }}>Total Products Sold</Box>
              <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>20 K</Box>
              <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>
                <ArrowUpwardIcon/>
                17%
              </Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
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
            <Box sx={{alignItems: 'center'}}>
              <Box sx={{ color: '#46505A' }}>Total Distributors</Box>
              <Box sx={{ color: '#173A5E', fontSize: 24, fontWeight: 'medium' }}>20 K</Box>
              <Box sx={{ color: '#009688', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}}>
                <ArrowUpwardIcon/>
                17%
              </Box>
              <Box sx={{ color: 'lightgray', display: 'inline', fontSize: 14 }}>vs. last month</Box>
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
