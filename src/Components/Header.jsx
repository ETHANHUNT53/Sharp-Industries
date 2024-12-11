// src/components/Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'flex-start' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1, 
              textAlign: { xs: 'center', md: 'left' },
              position: { xs: 'absolute', md: 'static' },
              left: { xs: '50%', md: 'unset' },
              transform: { xs: 'translateX(-50%)', md: 'unset' }
            }}
          >
            Sharp Industries
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center'
            }}
          >
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/products">Products</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;