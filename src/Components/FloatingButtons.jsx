// src/components/FloatingButtons.jsx
import React from 'react';
import { IconButton, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FloatingButtons = () => {
  const phoneNumber = "6388911255"; // Replace with your company’s WhatsApp number
  const whatsappMessage = "Hello! I would like to know more about your services."; // Optional predefined message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const youtubeUrl = "https://www.youtube.com/@SharpNewBusinessIdea"; // Replace with your YouTube channel URL
  
  const iconButtonStyle = {
    bgcolor: 'primary.main',
    color: 'white',
    '&:hover': {
      bgcolor: 'primary.dark',
      transform: 'translateY(-5px)',
      transition: 'transform 0.3s',
    },
    boxShadow: 3,
  };

  return (
    <Box sx={{
      position: 'fixed',
      bottom: "80px",
      right: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
    }}>
      <IconButton
         sx={{
          ...iconButtonStyle,
          bgcolor: '#FF0000',
          '&:hover': {
            bgcolor: '#CC0000',
            transform: 'translateY(-5px)',
            transition: 'transform 0.3s',
          },
        }}
        onClick={() => window.open(youtubeUrl, '_blank')}
      >
        <YouTubeIcon style={{height:"40px",width:"40px"}}/>
      </IconButton>
      <IconButton
         sx={{
          ...iconButtonStyle,
          bgcolor: '#25D366',
          '&:hover': {
            bgcolor: '#128C7E',
            transform: 'translateY(-5px)',
            transition: 'transform 0.3s',
          },
        }}
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <WhatsAppIcon style={{height:"40px",width:"40px"}} />
      </IconButton>
    </Box>
  );
};

export default FloatingButtons;