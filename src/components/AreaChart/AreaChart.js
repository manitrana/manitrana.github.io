import React from "react";
import { Line } from "react-chartjs-2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function AreaChart() {

    const data = {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [3500,3550,2424,4040,4141,4111,4544,2247,5555,6811], // Specify the data values array
            fill: true,
            borderColor: '#4A3857', // Add custom color border (Line)
            backgroundColor: '#4A3857', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
            label: 'Series 2', // Name the series
            data: [1288, 8942,4545,7588,1499,242,1417,5504,75,457], // Specify the data values array
            fill: true,
            borderColor: '#954063', // Add custom color border (Line)
            backgroundColor: '#954063', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]
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

}