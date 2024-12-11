import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Container >
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
            , textAlign: {xs: 'center' , md: 'left'}
          }}>
          About Us
        </Typography>
        <br />
        <Typography variant="body1" sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }
            , textAlign: {xs: 'center' , md: 'left'}
          }}>
          Established in the year 2019 we “Sharp Industries” is a Manufacturer
          and Trader of the wide spectrum Ball Pen Making Machine, Scrubber
          Packing Machine, Dish Scrubber, etc. We are manufacturing these
          products using premium grade raw material that is procured from the
          authentic vendors of the market. We offer these products at reasonable
          rates and deliver these within the promised time-frame.
          <br />
          We have hired an adroit team of employees, which keeps themselves
          abreast with advanced manufacturing techniques and designs. Further,
          we also have a quality control unit, wherein, we check our entire
          range on defined parameters like design, quality and finish. All units
          and equipped with all the essential tools, machine, and technology in
          order to manufacture a high-quality range of products.
          <br />
          Under the valuable guidance of our mentor, Mr. Ashrey Kumar, we are
          growing with a notable rate in the market. He has spent long years in
          the industry to have rich industrial experience enabling us to
          understand the varied requirements of our clients.
        </Typography>
      </Box>
      
      <Box marginTop={8}>
        <Typography variant="h4" color="initial" sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
            , textAlign: {xs: 'center' , md: 'left'}
          }}>Why Us?</Typography>
          <br />
        <Typography variant="body1" color="initial" sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }
            , textAlign: {xs: 'center' , md: 'left'}
          }}>Since our development in this industry, we have directed all our hard work in accomplishing a top-notch stature by delivering a supreme variety of products to our customers. Our company is widely acclaimed due to the following reasons:</Typography>
        <ul>
          <li>Quality assured product range</li>
          <li>Adept team of professionals</li>
          <li>Client-centric approach</li>
          <li>Competitive price structure</li>
          <li>Prompt delivery</li>
          <li>Positive records</li>
        </ul>
      </Box>

      <Box marginTop={8}>
        <Typography variant="h4" color="initial" sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
            , textAlign: {xs: 'center' , md: 'left'}
          }}>Our Team</Typography>
          <br />
        <Typography variant="body1" color="initial" sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }
            , textAlign: {xs: 'center' , md: 'left'}
          }}>Our teams of highly skilled and experienced professionals help us in the attainment of a number of the firm’s targets, predefined. The team, for reasons of better and highly effective management of operations, has been parted into several highly operational units. These units, in the most effective and efficient manner, boosts the firm’s production capacity. The division of these professionals is done as per their area of expertise. Further, regular training sessions are provided, for maximum employee satisfaction.</Typography>

      </Box>

      <Box marginBottom={10}></Box>
      
    </Container>
    </>
  );
};

export default About;
