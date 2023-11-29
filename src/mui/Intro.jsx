import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Intro() {
  return (<>
    <Button color='error' variant='contained'>Hello</Button>

    <TextField  id="outlined-basic" label="Outlined" variant="outlined"/>
  </>
  )
}

export default Intro