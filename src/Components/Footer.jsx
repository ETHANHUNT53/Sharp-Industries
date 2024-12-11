import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  marginTop: "auto",
}));


const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "24px",
  marginRight: "1rem",
  "&:hover": {
    color: theme.palette.secondary.main,
    transition: "color 0.3s ease",
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "6388911255"; // Replace with your company’s WhatsApp number
  const whatsappMessage = "Hello! I would like to know more about your services."; // Optional predefined message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const youtubeUrl = "https://www.youtube.com/@SharpNewBusinessIdea";

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box
              textAlign={{ xs: 'center', sm: 'left' }}
              mb={2}
            >
              <Typography variant="h5" gutterBottom>
                Sharp Industries
              </Typography>
              <Typography variant="body2">
                Leading the way in industrial innovation and excellence.
              </Typography>
              <br />
              <Typography variant="body1" >GSTIN: 09ABHPJ9184C2ZF</Typography>
              <br />
              <Typography variant="body1" >Address: Transport Nagar, Gati Chauraha Prayagraj (UP) India</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              textAlign={{ xs: 'center', sm: 'left' }}
            >
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box display="flex" flexDirection="column" alignItems={{xs: 'center', sm: 'start'}} gap={1}>
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/products">Products</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              textAlign={{ xs: 'center', sm: 'left' }}
            >
              {/* <Typography variant="h6" gutterBottom>
                Contact Info
              </Typography> */}
              {/* <Typography variant="body2" mb={1}>
                Phone: +1 (555) 123-4567
              </Typography> */}
              {/* <Typography variant="body2" mb={2}>
                Email: info@sharpindustries.com
              </Typography> */}

              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                <SocialIcon href="#" aria-label="Facebook">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href={youtubeUrl} aria-label="Youtube">
                  <FaYoutube />
                </SocialIcon>
                <SocialIcon href={whatsappUrl} aria-label="Whatsapp">
                  <FaWhatsapp />
                </SocialIcon>
                {/* <SocialIcon href="#" aria-label="Instagram">
                  <FaInstagram />
                </SocialIcon> */}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} pt={3} borderTop={1} borderColor="rgba(255, 255, 255, 0.1)" textAlign="center">
          <Typography variant="body2">
            © {currentYear} Sharp Industries. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;