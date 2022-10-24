import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "gray",
        borderColor: "rgb(255, 99, 132)",
        data: [17, 5, 12, 0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    
    <div>
      <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 2, width: '900px', height: '400px'}}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold', color: '#46505A' }}>Trend: last 10 years
            <Bar data={data} />
          </Box>        
      </Container>
    </div>

    
  );
};

export default BarChart;
