import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid2, ButtonBase, Link } from '@mui/material';
import { Link as RouterLink } from 'gatsby';

const PokemonCard = ({pokemon, addToCart}) => {
    // Your code here
    console.log(pokemon);

    return (
        <Card className="shadow-lg w-full border mb-2 ">
            <CardContent className='md:flex justify-between border items-center'>
                <Box className='pb-2'>
                <Typography variant="h6" className="mb-1 text-lg font-bold leading-6">Online</Typography>
                <Link href='#' underline="none" variant="body2" color="primary">
                    {pokemon.id.slice(0, -1)}
                </Link>
                <Typography variant="body2" color="textSecondary">
                    Order Date
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    <strong>Total</strong> $19.99
                </Typography>
                </Box>
                <Box className='flex flex-col gap-2'>
                    <RouterLink to='/orderDetails' state={{pokemon}} underline="none" variant="body2" color="primary">
                        <Button variant="outlined" className='w-full md:w-[256px] px-9 py-2'>    
                            View Order Details
                        </Button>
                    </RouterLink>
                    <Button variant="outlined" className='w-full  md:w-[256px] px-9 py-2'>
                        Buy Items Again
                    </Button>
                </Box>
            </CardContent>
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
    );
};

export default PokemonCard;