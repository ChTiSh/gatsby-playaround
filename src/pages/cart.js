import React from "react";
import { useCartStore } from "../store/cartStore";
import { Card, CardContent, Typography, Button, Grid2 } from "@mui/material";


const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (cart.length === 0) {
    return <Typography variant="h4">Your cart is empty</Typography>;
  }

  return (
    <div className="container mx-auto mt-10">
      <Typography variant="h2" className="text-center mb-10">
        Shopping Cart
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        className="mb-6"
        onClick={clearCart}
      >
        Clear Cart
      </Button>
      <Grid2 container spacing={4}>
        {cart.map((item) => (
          <Grid2 xs={12} sm={6} md={4} key={item.id}>
            <Card className="shadow-lg">
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="body2">
                  Quantity: {item.quantity}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  className="mt-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default CartPage;
