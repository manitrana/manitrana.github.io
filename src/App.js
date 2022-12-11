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
import Paper from '@mui/material/Paper';

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
      <Grid container spacing={1} padding="2vh" justify="center" align="center" direction="row">
        

          <Grid item xs={12} md={4} lg={3}>
            <Container sx={{
              backgroundColor: 'white',
              border: '1px solid white',
              p: 2,
              display: 'flex',
              borderRadius: '5px',
              flexDirection: 'column',
              height: 180}}>
                  
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <HandshakeIcon fontSize='large' sx={{color: '#0075b0'}}/>
                  </Box>

                  
                  <Typography color="gray" fontFamily="Nunito">Total Sales</Typography>
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <Typography color="#0075b0" component="p" fontSize= "36px" fontWeight="bold" fontFamily="Nunito">
                      3,024
                    </Typography>
                  </Box>

                  <Box sx={{paddingTop: '.5vh'}}>
                    <Chip size="small" color="success" icon={<ArrowUpwardIcon />} label="6%"/>
                  </Box>

                  
            </Container>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Container sx={{
              backgroundColor: 'white',
              border: '1px solid white',
              p: 2,
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              height: 180}}>
                  
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <RequestQuoteIcon fontSize='large' sx={{color: '#C65498'}}/>                    
                  </Box>

                  <Typography color="gray" fontFamily="Nunito">Total Revenue</Typography>
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <Typography color="#C65498" component="p" fontSize= "36px" fontWeight="bold" fontFamily="Nunito">
                      $83,924
                    </Typography>
                    
                  </Box>
                  
                  <Box sx={{paddingTop: '.5vh'}}>
                    <Chip size="small" color="error" icon={<ArrowDownwardIcon />} label="3%"/>
                  </Box>

            </Container>
          </Grid>
        
       


        <Grid item xs={12} md={4} lg={3}>
            <Container sx={{
              backgroundColor: 'white',
              border: '1px solid white',
              p: 2,
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              height: 180}}>
                  
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <InventoryIcon fontSize='large' sx={{color: '#0075b0'}}/>                   
                  </Box>

                  <Typography color="gray" fontFamily="Nunito">Total Products</Typography>
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <Typography color="#0075b0" component="p" fontSize= "36px" fontWeight="bold" fontFamily="Nunito">
                      594
                    </Typography>
                    
                  </Box>
            </Container>
          </Grid>


        

        <Grid item xs={12} md={4} lg={3}>
            <Container sx={{
              backgroundColor: 'white',
              border: '1px solid white',
              p: 2,
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              height: 180}}>
                  
                  <Box sx={{display: 'flex', direction: 'row', justifyContent:'center'}}>
                    <Groups3Icon fontSize='large' sx={{color:'#C65498'}}/>                   
                  </Box>

                  <Typography color="gray" fontFamily="Nunito">Total Distributors</Typography>
                  <Typography color="#C65498" component="p" fontSize= "36px" fontWeight="bold" fontFamily="Nunito">
                    94
                  </Typography>         
            </Container>
          </Grid>   
      </Grid>


      <Grid display="flex" justify="center" direction="row" paddingRight="3vh" paddingLeft="1vh">
        <Container>
          <AreaChart></AreaChart>
        </Container>
        <Container>
          <BarChart></BarChart>
        </Container>
        
      </Grid>

      <Grid display="flex" justify="center" direction="row" paddingTop="2vh" paddingRight="3vh" paddingLeft="1vh">
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
