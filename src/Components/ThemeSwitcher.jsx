// src/components/ThemeSwitcher.jsx
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
      {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeSwitcher;