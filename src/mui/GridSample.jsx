import React from 'react'
import Grid from '@mui/material/Grid';

function GridSample() {

    return (<>
        <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
                <div style={{ height: 200, borderStyle: 'solid' }}>

                </div>
            </Grid>
            <Grid item xs={6} md={3}>
                <div style={{ height: 200, borderStyle: 'solid' }}>

                </div>
            </Grid>
            <Grid item xs={6} md={3}>
                <div style={{ height: 200, borderStyle: 'solid' }}>

                </div>
            </Grid>
            <Grid item xs={6} md={3}>
                <div style={{ height: 200, borderStyle: 'solid' }}>

                </div>
            </Grid>

        </Grid>

    </>)
}

export default GridSample