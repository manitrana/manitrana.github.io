import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import spacing from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';



import { DataGrid } from '@mui/x-data-grid';


export default function ProductsDataTable() {

    const columns = [
        { field: 'id', headerName: 'Product #', width: 110 },
        {
          field: 'firstName',
          headerName: 'Product name',
          width: 210
        },
        {
          field: 'lastName',
          headerName: 'Product Type',
          width: 190,
        },
        {
          field: 'age',
          headerName: 'Revenue Growth',
          width: 150,
        }
      ];
      
      const rows = [
        { id: 19781, lastName: 'Virus Protection', firstName: 'Antivirus 1.4', age: '+35%' },
        { id: 12993, lastName: 'Hosting', firstName: 'Cloud Instance EC5', age: '+42%' },
        { id: 17263, lastName: 'Virus Protection', firstName: 'Norton 2.1', age: '+45%' },
        { id: 12738, lastName: 'Virus Protection', firstName: 'Norton 2.0', age: '+16%' },
        { id: 12093, lastName: 'Virus Protection', firstName: 'Secure Alert', age: '+8%' },
        { id: 12983, lastName: 'Hosting', firstName: 'Enterprise Marketplace', age: '+52%' },
        { id: 10761, lastName: 'Hosting', firstName: 'Cloud Instance EC2', age: '+23%' },
        { id: 23098, lastName: 'Virus Protection', firstName: 'Antivirus 1.2', age: '+47%' },
        { id: 14009, lastName: 'Virus Protection', firstName: 'Secure Alert 1.1', age: '+64%' },
      ];
    
    return (
        <div>
            <Container sx={{bgcolor: 'white', border: '1px solid white', borderRadius: 2, p: 3, width: '810px', height: '550px'}}>
              
              <Typography sx={{
                    display: 'flex',
                    fontFamily: 'Nunito',
                    fontSize: '24px', 
                    justifyContent: 'center', 
                    fontWeight: 'medium', 
                    paddingBottom: '2vh', 
                    color: '#0075b0'}}>
                      <InventoryIcon sx={{pt: '0.4vh', pr: '0.4vh'}}/>
                        Top Grossing Products                
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
                  color: '#626262',
                },
                '& .MuiDataGrid-row:hover': {
                color: '#995D81',
                fontWeight: 'bold',
                      },
                      '& .MuiDataGrid-columnHeader': {
                        color: 'black',
                        backgroundColor: 'white',
                        fontSize: '16px'
                      },
                      '& .MuiDataGrid-columnSeparator': {
                        color: 'white'
                      },
                      '& .MuiDataGrid-MuiCheckbox': {
                        color: 'white'
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

            
            
            {/* 
            <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 3, width: '700px', height: '350px'}}>

                <Box sx={{
                    display: 'flex',
                    fontSize: 'large', 
                    fontFamily: 'Nunito',
                    justifyContent: 'flex-start', 
                    fontWeight: 'bold', 
                    paddingBottom: '2vh', 
                    color: '#626262'}}>
                        Top Products
                        
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>
                    
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, maxWidth: 800}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Product Name</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Amount Sold</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Total Revenue</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Revenue Growth</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.amountsold}</TableCell>
                                    <TableCell>{row.revenue}</TableCell>
                                    <TableCell>{row.growth}</TableCell>
                                    
                                </TableRow>))}
                        </TableBody>
                    </Table>
                    </TableContainer>

                </Box>        
            </Container>
            
            */}

        </div>
    );
}

