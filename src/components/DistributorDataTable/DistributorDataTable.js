import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold'}}>Distributor Name</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Products Sold</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Total Sales</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Status</TableCell>
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
        </div>
    );
}