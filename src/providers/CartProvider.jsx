import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addCart(item) {
    let add = true;
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        add = false;
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    if (add) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      setCart(newCart);
    }
  }

  function removeCart(id) {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newCart);
  }

  function addQuantity(id) {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(newCart);
  }
  function decreaseQuantity(id) {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    setCart(newCart);
  }

  function checkoutCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        addQuantity,
        decreaseQuantity,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);
CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export { CartProvider, useCart, CartContext };
