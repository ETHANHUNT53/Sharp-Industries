// src/components/ProductCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const ProductCard = ({ product }) => {

    const handleGetQuoteClick = () => {
        const phoneNumber = "6388911255"; // Replace with your company’s WhatsApp number
        const whatsappMessage = `Hello! I would like to know about ${product.name}`; // Optional predefined message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Card sx={{ maxWidth: 400, margin: 2, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',transition: 'transform 0.3s ease-in-out', boxShadow: 3,
                '&:hover': {
                    transform: 'scale(1.05)',
                }, }}>
            <Box sx={{ height: 300, overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    sx={{ height: '100%', width: '100%', objectFit: 'contain' }}
                    image={product.image}
                    alt={product.name}
                />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }
                        , textAlign: {xs: 'center' , md: 'left'}
                }}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' } 
                }}>
                <Button size="small" sx={{
                    border: '1px solid cyan',
                }} onClick={handleGetQuoteClick}>Get Best Price</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
