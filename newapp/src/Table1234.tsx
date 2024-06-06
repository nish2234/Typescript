import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface JovialData {
    userId : Number ,
    id : Number ,  
    title : String, 
    body : String
}

interface postData {
    post : JovialData[]
}
const Table1234 : React.FC<postData> = ({post}) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {post.map((row) => (
          <TableRow
            key={row.id.toString()}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.userId.toString()}
            </TableCell>
            <TableCell align="right">{row.id.toString()}</TableCell>
            <TableCell align="right">{row.title}</TableCell>
            <TableCell align="right">{row.body}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Table1234