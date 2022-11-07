import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "2020",
        backgroundColor: "ghostwhite",
        borderColor: "lightblue",
        fill: true,
        data: [17, 5, 12, 0, 10, 5, 2, 20, 30, 45, 31, 54],
      },
      /*
      {
        label: "Last Year",
        backgroundColor: "ghostwhite",
        borderColor: "green",
        fill: true,
        data: [13, 2, 27, 14, 31, 12, 4, 22, 27, 34, 29, 11],
      }
      */
    ],
    
  };
  return (
    
    <div>
      <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 3, width: '700px', height: '400px'}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>
            <Line data={data}/>
          </Box>        
      </Container>
    </div>

    
  );
};

export default BarChart;
