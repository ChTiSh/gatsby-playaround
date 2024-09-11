import create from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  
  // Action to add a Pokémon to the cart
  addToCart: (pokemon) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === pokemon.id);
    if (existingItem) {
      // If Pokémon is already in the cart, update the quantity
      return {
        cart: state.cart.map((item) =>
          item.id === pokemon.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    // Otherwise, add it to the cart
    return {
      cart: [...state.cart, { ...pokemon, quantity: 1 }],
    };
  }),

  // Action to remove a Pokémon from the cart
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),

  // Clear the cart
  clearCart: () => set({ cart: [] }),
}));
