import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import EnergySavingsLeafTwoToneIcon from '@mui/icons-material/EnergySavingsLeafTwoTone';
import'../App.css';
import market from "../assets/market.svg";

export default function Navbar( ) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      {<AppBar position="static" className='bg-[#262626]'>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img  className="w-40"src={market}  alt="svg"/>
            
          </Typography>
          <Button className='bg-lime-600' color="inherit">Buy Now</Button>

        </Toolbar>
      </AppBar> }
    </Box>
            

  );
}
