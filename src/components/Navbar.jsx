import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EnergySavingsLeafTwoToneIcon from '@mui/icons-material/EnergySavingsLeafTwoTone';
import'../App.css';

export default function Navbar( ) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      {<AppBar position="static" className='bg-[#262626]'>
        <Toolbar>
        <EnergySavingsLeafTwoToneIcon  className='text-lime-500'/>
        
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            envato<span className='text '>market</span>
          </Typography>
          <Button className='bg-lime-600' color="inherit">Buy Now</Button>

        </Toolbar>
      </AppBar> }
    </Box>
            

  );
}
