import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductsDataTable() {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Value 1', 1, 1.1, 1.2),
        createData('Value 2', 2, 2.1, 2.2),
        createData('Value 3', 3, 3.1, 3.2),
        createData('Value 4', 4, 4.1, 4.2),
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
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

