import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apolloClient";
import { Card, Container, InputLabel, MenuItem,FormControl, Select, CardContent, Typography, Button, Grid2, Breadcrumbs, Tab, Box, Tabs } from "@mui/material"; // MUI Components
import { Link } from "gatsby"
import { useCartStore } from "../store/cartStore";
import PokemonCard from './pokemonCard';




import "../styles/global.css"; 

const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(first: 20) {
      id
      name
      image
    }
  }
`;

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
      </div>
    );
  }

const PokemonShop = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS);
    const addToCart = useCartStore((state) => state.addToCart);

    const [tabValue, setTabValue] = React.useState(0);
    const [showingValue, setShowingValue] = React.useState(10);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const handleShowingChange = (event) => {
        setShowingValue(event.target.value);
    }
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
  
    return (
        <div className="container mx-auto mt-10"> 
        <Typography variant="h2" className="text-center mb-10">
          Pokémon Shop
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Typography>Orders & Purchases</Typography>
        </Breadcrumbs>
        <h2>Orders & Purchases</h2>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab label="Online" {...a11yProps(0)}/>
            <Tab label="In-Warehouse" {...a11yProps(1)} />
            <Tab label="Installation Services" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <Box className='flex justify-between items-center'>
            <Box>
              <Typography variant="h6" className="mb-4">Your new orders will appear shortly after confirmation.</Typography>
              <Link to="/fsa-purchases">View Flexible Spending Account (FSA) Purchases</Link>
            </Box>
            <FormControl sx={{ minWidth: 200 }} size="small">
              <InputLabel id="showing-select-label">Showing</InputLabel>
              <Select
                labelId="showing-select-label"
                id="showing-select"
                value={showingValue}
                label="Showing"
                onChange={handleShowingChange}
              >
                <MenuItem value={10}>Last 6 months</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Container spacing={4} max-width='xl' className="mt-8 mx-0" >
            {data.pokemons.map((pokemon) => (
                <PokemonCard item key={pokemon.id} pokemon={pokemon} addToCart={addToCart} />   
            ))}
          </Container>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <Typography>In-Warehouse Content</Typography>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          <Typography>Installation Services Content</Typography>
        </CustomTabPanel>
      </div>
    );
};


const PokemonPage = () => (
  <ApolloProvider client={client}>
    <PokemonShop />
  </ApolloProvider>
);

export default PokemonPage;
