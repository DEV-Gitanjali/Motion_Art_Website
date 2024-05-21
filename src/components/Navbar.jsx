import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import'../App.css';
import market from "../assets/market.svg";

export default function Navbar( ) {
  // this is the navbar section
  return (
    <Box sx={{ flexGrow: 1 }} >
      {<AppBar position="static" className='bg-[#262626] fixed z-20'>
        <Toolbar>
{/* this part for adding logo img */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img  className="w-40"src={market}  alt="svg"/>
            
          </Typography>
          {/* this part for button section */}
          <Button className='bg-lime-600' color="inherit">Buy now</Button>

        </Toolbar>
      </AppBar> }
    </Box>
            

  );
}
