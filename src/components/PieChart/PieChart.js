import React from "react";
import Container from '@mui/material/Container';
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Box from '@mui/material/Box';
import Papa from 'papaparse';
import { Button } from "@mui/material";

export default function PieChart() {

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const myDataMain = results.data;
        console.log(myDataMain);
      },
    });
  };
    const data = {
        labels: ["R1", "R2", "R3", "R4", "R5", "R6"],
        datasets: [
          {
            label: "# of Votes",
            data: [2,4,9,12,3,7],
            backgroundColor: [
              "#ffb74d",
              "#244D70",
              "#673ab7",
              "#F7E018",
              "#2196f3",
              "#80deea",
            ]
          },

        ],
      };
      return (

        
        
        <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 4, width: '700px', height: '400px'}}>
        <div>
        {/* File Uploader */}
          <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
          />
        </div>
          <Box sx={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>
            <div style={{ width: 250, textAlign: "center" }}>
              Regional Analysis
              <Pie data={data} width={25} height={25} />
            </div>
          </Box>
        </Container>

        
      );
}