import React, {useState} from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const initialRows: GridRowsProp = [
    { id: 1, col1: 'Web Developer', col2: 'CoolCompany', col3: 'Toronto, ON' },
    { id: 2, col1: 'Web Designer', col2: 'CoolCompany2', col3: 'Mississauga, ON'},
  ];
  
  const initialColumns: GridColDef[] = [
    { field: 'col1', headerName: 'Job Position', width: 150, editable: true },
    { field: 'col2', headerName: 'Company', width: 150, editable: true },
    { field: 'col3', headerName: 'Location', width: 150, editable: true },
  ];

const JobApplicationTracker = () => {
    const [rows, setRows] = useState(initialRows)
    
    const addRow = () => {
        const newRow = {id: rows.length + 1, col1: '', col2: '', col3: ''};
        setRows(prevRows => [...prevRows, newRow]);
    }

    const handleCellChange = (id, field, value) => {
      const updatedRows = rows.map(row => {
        if (row.id === id) {
          return { ...row, [field]: value };
        }
        return row;
    });
      setRows(updatedRows);
    };    

  return (
    <div style={{ height: 300, width: '100%' }}>
        <button className="addBtn" onClick={addRow}>+</button>
        <DataGrid rows={rows} columns={initialColumns} onEditCellChange={(params) => handleCellChange(params.id, params.field, params.value)} />
    </div>
  );
}

export default JobApplicationTracker