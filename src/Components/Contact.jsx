import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    message: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === '',
      message: formData.message.trim() === '',
    };

    if (newErrors.name || newErrors.message) {
      setErrors(newErrors);
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error',
      });
      return;
    }

    // Replace with your actual EmailJS values
    const serviceID = 'service_fx7lupg';
    const templateID = 'template_dsvqvlc';
    const userID = 'b2N2zEvtCfD2e9z3A';

    // Send email via EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        // console.log('Email sent successfully', response.status, response.text);
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });
        setFormData({ name: '', message: '' });
      })
      .catch((error) => {
        // console.error('Email sending error', error);
        setSnackbar({
          open: true,
          message: 'Failed to send message. Please try again later.',
          severity: 'error',
        });
      });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <StyledPaper>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1976d2' }}
        >
          Contact Sharp Industries
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 4, color: 'text.secondary' }}
        >
          We'd love to hear from you. Send us a message!
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2 }}
        >
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Your Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name && 'Name is required'}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            required
            id="message"
            name="message"
            label="Your Message"
            placeholder="Enter your message..."
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message && 'Message is required'}
            sx={{ mb: 4 }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            startIcon={<FaPaperPlane />}
            sx={{
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem',
              borderRadius: 2,
            }}
          >
            Send Message
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </StyledPaper>
    </Container>
  );
};

export default Contact;