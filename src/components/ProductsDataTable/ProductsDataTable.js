import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import spacing from '@mui/system';


export default function ProductsDataTable() {

    function createData(name, amountsold, revenue, growth) {
        return { name, amountsold, revenue, growth };
      }
      
      const rows = [
        createData('Value 1', 1, 1.1, 1.2),
        createData('Value 2', 2, 2.1, 2.2),
        createData('Value 3', 3, 3.1, 3.2),
        createData('Value 4', 4, 4.1, 4.2)
      ];
    return (
        <div>
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
        </div>
    );
}

