// src/components/Home.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';


const products = [
  {
    id: 1,
    name: 'Shine Bright Green Scrubber Pad',
    image: 'https://5.imimg.com/data5/KD/FJ/FY/SELLER-38813518/green-scrubber-pad.jpg',
  },
  {
    id: 2,
    name: 'Cotton Wick Making Machine',
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/round-cotton-wick-making-machine-2217588963-9kngxjkw.jpg',
  },
  {
    id: 3,
    name: 'Scruber Packing Machine',
    image: 'https://cpimg.tistatic.com/07945573/b/5/Wooden-Box-Manual-Scrubber-Packing-Machine.jpg',
  },
  {
    id: 4,
    name: 'Scrub Sponge',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/NQ/CC/FX/137867332/1421-scrub-sponge-2-in-1-pad-for-kitchen-sink-bathroom-cleaning-scrubber.jpg',
  },
  {
    id: 5,
    name: 'Scrubber Packaging Blister',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/ZE/KZ/UB/35127245/scrubber-packaging-blister-250x250.jpg',
  },
  {
    id: 6,
    name: 'Pen Raw Material',
    image: 'https://5.imimg.com/data5/WW/JC/MY-3246652/use-500x500.png',
  },
  {
    id: 7,
    name: 'Plastic Cleaning Scrubber',
    image: 'https://m.media-amazon.com/images/I/41DbRzZN7nL.jpg',
  },
  {
    id: 8,
    name: 'Loose Toothbrush',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2022/11/RX/BX/ZM/80917315/product-jpeg-500x500.jpg',
  },
];

const Home = () => {
  return (
    <Container>
      
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Welcome to Sharp Industries
        </Typography>
        <br />
        <Typography variant="h6" fontWeight={"light"} sx={{ 
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' },
          textAlign: { xs: 'center', md: 'left' },
        }}>
          At Sharp Industries, we take pride in being a trusted Manufacturer and Trader of high-quality machinery and products like Ball Pen Making Machines, Scrubber Packing Machines, and Dish Scrubbers. Since our establishment in 2019, we've been committed to delivering excellence through premium-grade materials sourced from authentic vendors. Our products are known for their durability, efficiency, and affordability.
          With a focus on timely delivery and customer satisfaction, we are here to meet your manufacturing and trading needs.
        </Typography>
        <br />
        <Typography variant="h3" marginTop={8} gutterBottom sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
          textAlign: { xs: 'center', md: 'left' },
        }}>
          Our Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;