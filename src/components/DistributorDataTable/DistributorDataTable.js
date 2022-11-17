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

export default function DistributorDataTable() {

    function createData(name, location, productssold, totalsales, status) {
        return { name, location, productssold, totalsales, status };
      }
      
      const rows = [
        createData('Value 1', 'NYC', 134, 4000, 'Yes'),
        createData('Value 2', 'NYC', 134, 4000, 'Yes'),
        createData('Value 3', 'NYC', 134, 4000, 'Yes'),
        createData('Value 4', 'NYC', 134, 4000, 'Yes')
      ];

    return (
        <div>

            <Container sx={{bgcolor: 'white', border: '1px solid ghostwhite', borderRadius: 2, p: 3, width: '700px', height: '350px'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>

                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, maxWidth: 800}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Distributor Name</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Location</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Products Sold</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Total Sales</TableCell>
                                <TableCell sx={{fontWeight: 'bold', backgroundColor: '#F8F8FF'}}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.location}</TableCell>
                                    <TableCell>{row.productssold}</TableCell>
                                    <TableCell>{row.totalsales}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                    </TableContainer>

                </Box>        
            </Container>

            
        </div>
    );
}