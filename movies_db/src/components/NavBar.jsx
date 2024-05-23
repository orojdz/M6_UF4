import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <AppBar position="static" className='nav' sx={{ backgroundColor: '#6a64fb'}}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
            <HomeIcon />
        </Button>
        <Button color="inherit" component={Link} to="/movies/list">
          Movies List
        </Button>
        <Button color="inherit" component={Link} to="/movies/add">
          Add Movie
        </Button>
      </Toolbar>
    </AppBar>
  );
}