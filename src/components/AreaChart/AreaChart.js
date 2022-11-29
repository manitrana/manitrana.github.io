import React from "react";
import { Line } from "react-chartjs-2";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Scatter } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { width } from "@mui/system";




export default function AreaChart() {

    const data = {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
        datasets: [{
            label: 'Virus Protection', // Name the series
            data: [3500,3550,2424,4040,3241,4111,4544,2247,5555,6811], // Specify the data values array
            backgroundColor: '#fcc2e5',
            borderColor: '#b37299', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            animation: {
                duration: 2500,
              },
        },
        {
            label: 'Hosting', // Name the series
            data: [2500,4750,3414,3030,4211,2111,3924,2319,1239,3124], // Specify the data values array
            backgroundColor: '#47bbf5',
            borderColor: '#0075b0', // Add custom color background (Points and Fill)
            borderWidth: 2, // Specify bar border width
            animation: {
                duration: 1500,
                easing: 'easeInCubic'
              },
        }
        ]
    };
    
    return (
        
        <div>
           

           
            <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 1, p: 3, width: '810px', height: '500px'}}>
                <Box sx={{
                    display: 'flex',
                    fontFamily: 'Nunito',
                    fontSize: '20px', 
                    justifyContent: 'flex-start', 
                    fontWeight: 'bold', 
                    paddingBottom: '2vh', 
                    color: '#626262'}}>
                        Regional Sales by Product Type                        
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>
                    <Line data={data} sx={{width: '10px', height: '10px'}}/>
                </Box>        
            </Container>
            
        </div>
    );

}