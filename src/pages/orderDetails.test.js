import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderDetails from './orderDetails';
import { BrowserRouter } from 'react-router-dom';

// Mock the Gatsby Link component (used in Breadcrumbs)
jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('OrderDetails Component', () => {
  const mockPokemon = {
    name: 'Pikachu',
    image: 'https://example.com/pikachu.png',
  };

  const locationWithPokemon = {
    state: {
      pokemon: mockPokemon,
    },
  };

  const locationWithoutPokemon = {
    state: null,
  };

  test('renders fallback text when no Pokémon data is available', () => {
    render(
      <BrowserRouter>
        <OrderDetails location={locationWithoutPokemon} />
      </BrowserRouter>
    );

    expect(screen.getByText('No Pokémon data available')).toBeInTheDocument();
  });

  test('renders Pokémon details when location.state contains Pokémon data', () => {
    render(
      <BrowserRouter>
        <OrderDetails location={locationWithPokemon} />
      </BrowserRouter>
    );

    // Check if Pokémon name and image are rendered
    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockPokemon.name)).toBeInTheDocument();
    expect(screen.getByText('Buy this Pokémon again for $19.99')).toBeInTheDocument();
  });

  test('renders the accordion and breadcrumbs correctly', () => {
    render(
      <BrowserRouter>
        <OrderDetails location={locationWithPokemon} />
      </BrowserRouter>
    );

    // Check if Breadcrumbs are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Orders & Purchases')).toBeInTheDocument();
    expect(screen.getByText('Order Details')).toBeInTheDocument();

    // Check if Accordion is rendered
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
  });

  test('renders address, contact information, and order summary correctly', () => {
    render(
      <BrowserRouter>
        <OrderDetails location={locationWithPokemon} />
      </BrowserRouter>
    );

    // Check if shipping and contact info is displayed
    expect(screen.getByText('Shipping Address')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('1234 Elm Street')).toBeInTheDocument();
    expect(screen.getByText('Springfield, IL 62704')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();

    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Phone: (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument();

    // Check if order summary is displayed
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Subtotal: $49.99')).toBeInTheDocument();
    expect(screen.getByText('Shipping: $5.99')).toBeInTheDocument();
    expect(screen.getByText('Tax: $4.50')).toBeInTheDocument();
    expect(screen.getByText('Total: $60.48')).toBeInTheDocument();
  });
});
