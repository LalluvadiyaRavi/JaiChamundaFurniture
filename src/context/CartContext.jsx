import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
  
  export function CartProvider({ children }) {
    const { user } = useAuth();
  const cartKey = user
  ? `cart_${user.email}`
  : "guest_cart";

    const [cart, setCart] = useState([]);
    const [cartLoaded, setCartLoaded] = useState(false);
    useEffect(() => {
      setCartLoaded(false);

      const savedCart =
        localStorage.getItem(cartKey);

      setCart(
        savedCart
          ? JSON.parse(savedCart)
          : []
      );

      setCartLoaded(true);

    }, [cartKey]);

    useEffect(() => {

      if (!cartLoaded) return;

      localStorage.setItem(
        cartKey,
        JSON.stringify(cart)
      );

    }, [cart, cartKey, cartLoaded]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) =>
        prevCart.filter((item) => item.id !== id)
    );
  };
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
        prevCart.map((item) =>
        item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
        prevCart
        .map((item) =>
            item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const clearCart = () => {
    setCart([]);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}