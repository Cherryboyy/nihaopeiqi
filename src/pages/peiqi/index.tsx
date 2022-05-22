import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import instance from '../../utils/index'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID'},
  { field: 'username', headerName: '姓名',width:300},
  { field: 'email', headerName: '电话',width:300},
  { field: 'message', headerName: '咨询内容',width:300},
  {
    field: 'data_time',
    headerName: '咨询时间',width:300
  },
];

let rows:any = [];

export default function DataTable() {
  const [Peiqi_list, setPeiqi_list] = React.useState(Array);
  const getAlllist = () => {
    instance.post('/api/msg_board/list').then((res) => {
        console.log(res);
        rows = res.data.data
        return setPeiqi_list(res.data.data)
    })
  }
  React.useEffect(() => {
    getAlllist()
  },[])
  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
