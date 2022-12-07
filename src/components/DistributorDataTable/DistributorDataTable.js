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


export default function DistributorDataTable() {


    function createData(name, location, productssold, totalsales, status) {
        return { name, location, productssold, totalsales, status };
      }
      
      const rows = [
        createData('Kaspersky', 'NYC', 134, 4209, 'Yes'),
        createData('Norton', 'London', 134, 3724, 'Yes'),
        createData('PCOwl', 'Pasadena', 134, 3298, 'Yes'),
        createData('Secure Inc.', 'Redmond, WA', 134, 5281, 'Yes'),
        createData('Kaspersky', 'NYC', 134, 4209, 'Yes'),
        createData('Norton', 'London', 134, 3724, 'Yes'),
        createData('PCOwl', 'Pasadena', 134, 3298, 'Yes'),
      ];

    return (
        <div>

            <Container sx={{bgcolor: 'white', border: '1px solid white', borderRadius: 2, p: 3, width: '810px', height: '550px'}}>
                <Typography sx={{
                    display: 'flex',
                    fontFamily: 'Nunito',
                    fontSize: '26px', 
                    justifyContent: 'center', 
                    fontWeight: 'bold', 
                    paddingBottom: '4vh', 
                    color: 'gray'}}>
                        <Groups3Icon/>
                        All Distributors                
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', color: '#46505A' }}>

                    <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650, maxWidth: 800}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontFamily: 'Nunito', fontWeight: 'bold', color: 'black', backgroundColor: 'white'}}>Distributor Name</TableCell>
                                <TableCell sx={{fontFamily: 'Nunito', fontWeight: 'bold', color: 'black', backgroundColor: 'white'}}>Location</TableCell>
                                <TableCell sx={{fontFamily: 'Nunito', fontWeight: 'bold', color: 'black', backgroundColor: 'white'}}>Products Sold</TableCell>
                                <TableCell sx={{fontFamily: 'Nunito', fontWeight: 'bold', color: 'black', backgroundColor: 'white'}}>Total Sales</TableCell>
                                <TableCell sx={{fontFamily: 'Nunito', fontWeight: 'bold', color: 'black', backgroundColor: 'white'}}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{fontFamily: 'Nunito', color: 'white', backgroundColor: '#101010'}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{fontFamily: 'Nunito', color: 'white', backgroundColor: '#101010'}}>{row.location}</TableCell>
                                    <TableCell sx={{fontFamily: 'Nunito', color: 'white', backgroundColor: '#101010'}}>{row.productssold}</TableCell>
                                    <TableCell sx={{fontFamily: 'Nunito', color: 'white', backgroundColor: '#101010'}}>{row.totalsales}</TableCell>
                                    <TableCell sx={{fontFamily: 'Nunito', color: 'white', backgroundColor: '#101010'}}>{row.status}</TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                    </TableContainer>

                </Box>        
            </Container>

            
        </div>
    );
}