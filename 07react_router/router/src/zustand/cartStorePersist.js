import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStorePersist = create(
  persist((set) => ({
    cartt: [1, 2, 8, 5],

    addTocart: (item) =>
      set((state) => ({
        cart: [...state.cart, item],
      })),

    removeFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
    clearCart: () => set({ cart: [] }),
  }))
);
