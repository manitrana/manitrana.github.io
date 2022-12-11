import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import EventNoteIcon from '@mui/icons-material/EventNote';
import { HideGridColMenuItem } from "@mui/x-data-grid";


const BarChart = () => {
  
  
  
  Chart.defaults.font.family = "Nunito";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = 'gray';
  Chart.defaults.borderColor = "#F8F8FF";



  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "2021 Sales",
        backgroundColor: "rgba(205, 238, 255, 0.5)",
        borderColor: "lightblue",
        borderCapStyle: "butt",
        fill: true,
        lineTension: 0.35,
        data: [2317, 6225, 4112, 2317, 3334, 2127, 2521, 3120, 1430, 2356, 4231, 2454],
        animation: {
          duration: 1500,
          easing: 'easeInCubic'
        },
      } 
    ],    
  };
  return (
    
    <div>
      <Container sx={{bgcolor: 'white', border: '1px solid white', borderRadius: 2, p: 3, width: '810px', height: '500px'}}>
                
                <Box sx={{
                    display: 'flex',
                    fontSize: '24px', 
                    fontFamily: 'Nunito',
                    justifyContent: 'center', 
                    fontWeight: '', 
                    paddingBottom: '3vh', 
                    color: '#0075b0'}}>
                      <EventNoteIcon sx={{paddingTop: '0.4vh', paddingRight: '0.4vh', color: '#0075b0'}}/>
                        Yearly Sales Tracking
                        
                </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>
            <Line data={data}/>
          </Box>        
      </Container>
    </div>

    
  );
};

export default BarChart;
