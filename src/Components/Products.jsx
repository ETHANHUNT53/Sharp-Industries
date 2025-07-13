import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';

// const products = [
//   {
//     id: 1,
//     name: 'Shine Bright Green Scrubber Pad (Packaging and different sizes available)',
//     image: 'https://5.imimg.com/data5/KD/FJ/FY/SELLER-38813518/green-scrubber-pad.jpg',
//   },
//   {
//     id: 2,
//     name: 'Cotton Wick Making Machine',
//     image: 'https://images.jdmagicbox.com/quickquotes/images_main/round-cotton-wick-making-machine-2217588963-9kngxjkw.jpg',
//   },
//   {
//     id: 3,
//     name: 'Scruber Packing Machine',
//     image: 'https://cpimg.tistatic.com/07945573/b/5/Wooden-Box-Manual-Scrubber-Packing-Machine.jpg',
//   },
//   {
//     id: 4,
//     name: 'Scrub Sponge (Packaging and different sizes available)',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/NQ/CC/FX/137867332/1421-scrub-sponge-2-in-1-pad-for-kitchen-sink-bathroom-cleaning-scrubber.jpg',
//   },
//   {
//     id: 5,
//     name: 'Scrubber Packaging Blister',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/ZE/KZ/UB/35127245/scrubber-packaging-blister-250x250.jpg',
//   },
//   {
//     id: 5,
//     name: 'Pen Raw Material',
//     image: 'https://technodahak.com/wp-content/uploads/2024/10/Ball-Pen-Making-Raw-Material-1024x536.jpg.webp',
//   },
//   {
//     id: 6,
//     name: 'Packing Plastic Cleaning Scrubber',
//     image: 'https://m.media-amazon.com/images/I/41DbRzZN7nL.jpg',
//   },
//   {
//     id: 7,
//     name: 'Loose Toothbrush',
//     image: 'https://5.imimg.com/data5/ANDROID/Default/2022/11/RX/BX/ZM/80917315/product-jpeg-500x500.jpg',
//   },
//   {
//     id: 8,
//     name: 'Pen Making Machine (5 Set)',
//     image: 'https://5.imimg.com/data5/IOS/Default/2023/9/347324366/AE/YN/WR/191789761/product-jpeg-500x500.png',
//   },
//   {
//     id: 9,
//     name: 'Pen Making Machine(8 Set (5+3) ink filling machine)',
//     image: 'https://5.imimg.com/data5/IOS/Default/2023/9/347324366/AE/YN/WR/191789761/product-jpeg-500x500.png',
//   },
//   {
//     id: 10,
//     name: 'Pen Making Machine(11 Set (2 persons can do work))',
//     image: 'https://5.imimg.com/data5/IOS/Default/2023/9/347324366/AE/YN/WR/191789761/product-jpeg-500x500.png',
//   },
//   {
//     id: 11,
//     name: 'Pen Making Machine(17 Set (4 persons can do work))',
//     image: 'https://5.imimg.com/data5/IOS/Default/2023/9/347324366/AE/YN/WR/191789761/product-jpeg-500x500.png',
//   },
//   {
//     id: 37,
//     name: 'Refill Pen Making Machine',
//     image: 'https://m.media-amazon.com/images/I/81DAxyzJDnL._AC_UF350,350_QL80_.jpg',
//   },

//   {
//     id: 12,
//     name: 'Mop Making Machine',
//     image: 'https://images.jdmagicbox.com/quickquotes/images_main/floor-wiper-making-machine-2226598039-a4wxesie.jpg',
//   },
//   {
//     id: 13,
//     name: 'Broom Making Machine',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/424439898/PP/AD/DP/184710465/phool-jharoo-making-machine-500x500.jpg',
//   },
//   {
//     id: 14,
//     name: 'Viper Making Machine',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2024/3/403289565/TN/KT/YB/144973685/wiper-making-machine.jpeg',
//   },
//   {
//     id: 15,
//     name: 'Packing Machine',
//     image: 'https://m.media-amazon.com/images/I/61pWaqNy-kL.jpg',
//   },
//   {
//     id: 16,
//     name: 'Band Sealer Machine',
//     image: 'https://4.imimg.com/data4/DF/EH/MY-1229025/band-sealer.jpg',
//   },
//   {
//     id: 17,
//     name: 'Automatic Cotton Wick Making Machine',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/BF/SB/EE/53689273/fully-automatic-long-cotton-wick-making-machine-250x250.jpg',
//   },
//   {
//     id: 18,
//     name: 'Foam Pad (Packaging and different sizes available)',
//     image: 'https://rukminim2.flixcart.com/image/850/1000/kuczmvk0/scrub-pad/c/d/b/regular-multicolor-foam-pad-scrubber-for-dish-utensil-tile-original-imag7gchuuhqdpnx.jpeg?q=90&crop=false',
//   },
//   {
//     id: 19,
//     name: 'Phenyl',
//     image: 'https://www.bigbasket.com/media/uploads/p/xl/40308905_1-smart-home-herbal-phenyl-white-sandal.jpg',
//   },
//   {
//     id: 20,
//     name: 'Toilet Cleaner',
//     image: 'https://images.apollo247.in/pub/media/catalog/product/a/p/apo0123_1-sep2023.jpg',
//   },
//   {
//     id: 21,
//     name: 'Dish Wash',
//     image: 'https://www.pitambari.com/shop/wp-content/uploads/2019/07/Untitled-design-41.png',
//   },
//   {
//     id: 22,
//     name: 'Steel & Gi Scrubber',
//     image: 'https://tiimg.tistatic.com/fp/1/007/741/long-durable-round-silver-stainless-steel-scrubber-for-cleaning-use-328.jpg',
//   },
//   {
//     id: 23,
//     name: 'Scrubber Pad Sheet',
//     image: 'https://firsthub.in/public/uploads/all/H8WWKlDVMA8FehdArbp0phCaGdW9VYnqo03tR6j5.webp',
//   },
//   {
//     id: 24,
//     name: 'Scrubber Sheet',
//     image: 'https://images.jdmagicbox.com/quickquotes/images_main/ss-scrubber-packing-card-385274474-oel3k.jpg',
//   },
//   {
//     id: 25,
//     name: 'Masala Sheet',
//     image: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/GL/ZK/WS/34093573/product-jpeg-500x500.jpg',
//   },
//   {
//     id: 26,
//     name: 'Toothbrush Sheet',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/KB/MB/OQ/80917315/tooth-brush-sheet-500x500.jpg',
//   },
//   {
//     id: 27,
//     name: 'Tongue Cleaner',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/DO/KI/ML/12028626/kranti-plastic-handle-tongue-cleaner.jpeg',
//   },
//   {
//     id: 28,
//     name: 'Tile Brush',
//     image: 'https://5.imimg.com/data5/HM/ZA/VW/SELLER-84869767/wonder-clean-red-tile-brush-500x500.jpg',
//   },
//   {
//     id: 29,
//     name: 'Toilet Brush',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QtXqp16QijKPGPopaL9BFPv-ji4-PSKrDw&s',
//   },
//   {
//     id: 30,
//     name: 'Body Loofa',
//     image: 'https://images.meesho.com/images/products/62784466/9o5hf_512.webp',
//   },
//   {
//     id: 31,
//     name: 'Body Stick Loofa',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/437677851/BM/MI/FU/113607908/ff1-500x500.png',
//   },
//   {
//     id: 32,
//     name: 'Ready Pen',
//     image: 'https://5.imimg.com/data5/XL/GW/MY-16319652/plastic-ball-pen-500x500.jpg',
//   },
//   {
//     id: 33,
//     name: 'Pen Ink',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/XT/YF/FY/65058434/use-and-throw-blue-ball-pen-500x500.jpeg',
//   },
//   {
//     id: 34,
//     name: 'Pouches',
//     image: 'https://www.packman.in/wp-content/uploads/2021/09/SUP-Mockup2020Asset-1-2x-100_hp1_1-2.jpg',
//   },
//   {
//     id: 35,
//     name: 'Pen Pouches',
//     image: 'https://krishnawriting.com/stylish/wp-content/uploads/2024/01/5-Piece-Pouch.jpg',
//   },
//   {
//     id: 36,
//     name: 'Pen Packing Box',
//     image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/435027940/VY/HY/IO/199808491/pen-boxes-250x250.jpg',
//   },
//   // Add more products as needed
// ];
const Products = () => {
  const [products,setProducts] = useState([]);
  const fetchData = async()=>{
      let data = await fetch("https://ethanhunt53.github.io/product-data/products.json");
      let json = await data.json();
      setProducts(json);
      console.log("Products fetched successfully");
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom sx={{
             fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' }
            , textAlign: {xs: 'center' , md: 'left'}
        }}>
          Products
        </Typography>
        <br />
        <Typography variant="h6" sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }
            , textAlign: {xs: 'center' , md: 'left'}
        }}>
          Here you can find information about our products.
        </Typography>
        <br />
        <Grid container spacing={3}>
          {products?.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;