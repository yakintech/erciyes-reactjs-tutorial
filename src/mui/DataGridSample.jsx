import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

function DataGridSample() {

    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then(response => response.json())
            .then(data => setsuppliers(data))

    }, [])

    let columns = [
        {
            field: 'companyName',
            headerName: 'Company Name',
            width: 200
        },
        {
            field: 'contactName',
            headerName: 'Contact Name',
            width: 200
        },
        {
            field: 'contactTitle',
            headerName: 'Contact Title',
            width: 200
        },
        {
            field:'delete',
            headerName:'Delete',
            width:200,
            renderCell:(params)=>{
                return <button onClick={()=>{alert(params.row.id)}}>Delete</button>
            }
        }
    ]

    return (<>
        <h1>DataGrid Sample</h1>
        <div style={{ height: 400, width: '100%' }}>

            <DataGrid
                rows={suppliers}
                columns={columns}

            />
        </div>

    </>
    )
}

export default DataGridSample