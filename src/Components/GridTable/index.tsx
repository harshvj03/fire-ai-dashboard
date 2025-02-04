import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



type Props = {
    rows: any
    columns: any
}


export default function GridTable({rows, columns} : Props) {
  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
