import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import instance from '../../utils/index'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Peiqi: React.FC<any> = (props) => {
  const [Peiqi_list, setPeiqi_list] = React.useState(Array);
  let Alldata:any
  const getAlllist = () => {
    instance.post('/api/msg_board/list').then((res) => {
        console.log(res);
        Alldata = res.data.data
        return setPeiqi_list(res.data.data)
    })
  }
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  React.useEffect(() => {
    getAlllist()
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* {
          Peiqi_list.map((item:any,index) => {
            return (
              <div >
                <List key={index}>
                  <ListItemText primary={item.username} />
                  <ListItemText primary={item.email} />
                  <ListItemText primary={item.message} />
                  <ListItemText primary={item.data_time} />
                </List>
              </div>
            )
          })
        } */}
        {/* <DataGrid
          rows={Alldata}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        /> */}
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>姓名</TableCell>
              <TableCell align="right">电话号码</TableCell>
              <TableCell align="right">咨询内容</TableCell>
              <TableCell align="right">咨询时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Peiqi_list.map((row:any) => (
              <TableRow
                key={row.username}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.message}</TableCell>
                <TableCell align="right">{row.data_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      </Grid>
    </Box>
  );
}
export default Peiqi