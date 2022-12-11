import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { typographyVariant } from "@mui/system";
import { Typography } from "@mui/material";
import Groups3Icon from '@mui/icons-material/Groups3';
import "./DistributorDataTable.css";
import InventoryIcon from '@mui/icons-material/Inventory';
import { DataGrid } from '@mui/x-data-grid';



export default function DistributorDataTable() {


    
      
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'firstName',
          headerName: 'Distributor name',
          width: 175
        },
        {
          field: 'lastName',
          headerName: 'Location',
          width: 175,
        },
        {
          field: 'age',
          headerName: 'Quantity Sold',
          width: 150,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
          }
      ];
      
      const rows = [
        { id: 19781, lastName: 'California', firstName: 'Norton', age: '+35%',status: 'Active'},
        { id: 12993, lastName: 'Washington', firstName: 'Kaspersky', age: '+42%',status: 'Active' },
        { id: 17263, lastName: 'Florida', firstName: 'AWS', age: '+45%' ,status: 'Active'},
        { id: 12738, lastName: 'Washington', firstName: 'MSFT', age: '+16%' ,status: 'Active'},
        { id: 12093, lastName: 'Colorado', firstName: 'Secure Altert Inc.', age: '+8%' ,status: 'Active'},
        { id: 12983, lastName: 'Washington', firstName: 'Enterprise Marketplace', age: '+52%' ,status: 'Active'},
        { id: 10761, lastName: 'California', firstName: 'Apple', age: '+23%' ,status: 'Active'},
        { id: 23098, lastName: 'New York', firstName: 'IBM', age: '+47%' ,status: 'Active'},
        { id: 14009, lastName: 'Washington DC', firstName: 'Compute Securities LLC', age: '+64%' ,status: 'Active'},
      ];

    return (
        <div>

           

            <Container sx={{bgcolor: 'white', border: '1px solid white', borderRadius: 2, p: 3, width: '810px', height: '550px'}}>
              
              <Typography sx={{
                    display: 'flex',
                    fontFamily: 'Nunito',
                    fontSize: '24px', 
                    justifyContent: 'center', 
                    fontWeight: '', 
                    paddingBottom: '2vh', 
                    color: '#C65498'}}>
                      <Groups3Icon sx={{paddingTop: '0.4vh', paddingRight: '0.4vh', color: "#C65498"}}/>
                        Top Distributors           
              </Typography>

              <Box sx={{ height: 450, width: '100%' }}>
              <DataGrid 
                rowHeight={65} 
                sx =
                {{
                fontFamily: 'Nunito',
                border: '2px solid ghostwhite',
                backgroundColor: 'white',
                '& .MuiDataGrid-row': {
                  color: '#626262'
                },
                '& .MuiDataGrid-columnHeader': {
                    color: 'white',
                    backgroundColor: 'rgba(153, 93, 129)',
                    fontSize: '16px'
                  },
                '& .MuiDataGrid-row:hover': {
                color: '#995D81',
                fontWeight: 'bold',
                      },
                      
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'rgba(153, 93, 129)'
                      }
                      
                  }}
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
              />
              </Box>
            </Container>

        </div>
    );
}