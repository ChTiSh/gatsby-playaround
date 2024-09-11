import React from 'react';
import { Link } from 'gatsby';
import { Breadcrumbs, Typography, Card, CardContent, Grid2, ButtonBase, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const OrderDetails = ({location}) => {
    // Your code here
    const pokemon = location.state?.pokemon; 

    if (!pokemon) {
        return <p>No Pokémon data available</p>; // Fallback if data is not available
    }

    return (
        <div className="container mx-auto mt-10"> 
        <Typography variant="h2" className="text-center mb-10">
          Pokémon Shop
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to='pokemons'>Orders & Purchases</Link>
          <Typography>Order Details</Typography>
        </Breadcrumbs>
        <Typography variant="h5" className="text-start my-10 pb-6 border-b-2">Order Details</Typography>

        <Accordion className='mb-4'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Typography variant='h6'>Order Summary </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Grid2 container spacing={2} sx={{ maxWidth: '100%' }} className='border-t-2'>
                {/* Left side */}
                <Grid2 item size={{ xs: 12, md: 9 }}>
                    {/* First row full width of the 9*/}
                    <Grid2 container spacing={2} columns={2} >
                        <Grid2 size={1}>
                            <Typography variant="h6">Shipping Address</Typography>
                            <Typography>John Doe</Typography>
                            <Typography>1234 Elm Street</Typography>
                            <Typography>Springfield, IL 62704</Typography>
                            <Typography>United States</Typography>
                        </Grid2>
                        <Grid2 size={1}>
                            <Typography variant="h6">Contact Information</Typography>
                            <Typography>Phone: (555) 123-4567</Typography>
                            <Typography>Email: john.doe@example.com</Typography>
                        </Grid2>
                    </Grid2>
                    
                    {/* Second row */}
                    <Grid2 container spacing={2} sx={{ mt: 2 }}  columns={2}  className='border-t-2'>
                        <Grid2 size={1}>
                            <Typography variant="h6">Billing Address</Typography>
                            <Typography>John Doe</Typography>
                            <Typography>1234 Elm Street</Typography>
                            <Typography>Springfield, IL 62704</Typography>
                            <Typography>United States</Typography>
                        </Grid2>
                        <Grid2 size={1}>
                            <Typography variant="h6">Payment Method</Typography>
                            <Typography>Mastercard ending in 1234</Typography>
                            <Typography>Exp: 12/2026</Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Right side */}
                <Grid2 item size={{ xs: 12, md: 3 }} >
                    <Grid2 xs={12} mb={2}>
                    <Typography variant="h6">Membership Number</Typography>
                    <Typography>987654321</Typography>
                    </Grid2>
                    <Grid2 xs={12}>
                    <Typography variant="h6">Order Summary</Typography>
                    <Box className='border-t-2'></Box>
                        <Typography>Subtotal: $49.99</Typography>
                        <Typography>Shipping: $5.99</Typography>
                        <Typography>Tax: $4.50</Typography>
                        <Typography>Total: $60.48</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
            </AccordionDetails>
        </Accordion>
        <Card>
        <CardContent>
                <Box>
                    <Typography variant="text" className='block w-full mb-1 text-lg font-bold leading-6'>Delivered on {new Date().toLocaleDateString()}</Typography>
                    <Typography variant="text" className='block w-full'>Tracking #: 1234567890123756452423</Typography>
                </Box>
            <Grid2 container spacing={2} className='mt-2 -mb-6'>
                <Grid2 item>
                    <ButtonBase>
                        <img
                            src={pokemon.image}
                            alt={pokemon.name}
                            className="h-24 object-cover "
                        />
                    </ButtonBase>
                </Grid2>
                <Grid2 item className='pl-2'>
                <Typography variant="text">{pokemon.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Buy this Pokémon again for $19.99
                </Typography>
                </Grid2>
                </Grid2>
            </CardContent>
        </Card>


        </div>
    );
};

export default OrderDetails;