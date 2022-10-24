import React from "react";
import Container from '@mui/material/Container';
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Box from '@mui/material/Box';


export default function PieChart() {
    const data = {
        labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
        datasets: [
          {
            label: "# of Votes",
            data: [35, 25, 22, 20, 18, 15],
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
              "#F7E018",
              "#fff",
              "#FE452A",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
      return (
        
        <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 2, width: '900px', height: '400px'}}>
          <Box sx={{display: 'flex', justifyContent: 'flex-start', fontWeight: 'bold', color: '#46505A' }}>Regional Analysis
            <div style={{ width: 250, textAlign: "center" }}>
              
              <Pie data={data} width={25} height={25} />
            </div>
          </Box>
        </Container>
      );
}