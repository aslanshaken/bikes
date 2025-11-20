import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.name === action.item.name);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.name === action.item.name ? { ...i, qty: i.qty + 1 } : i)
        };
      }
      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] };
    }
    case 'REMOVE': {
      return { ...state, items: state.items.filter(i => i.name !== action.name) };
    }
    case 'SET_QTY': {
      return {
        ...state,
        items: state.items.map(i => i.name === action.name ? { ...i, qty: action.qty } : i)
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const addItem = item => dispatch({ type: 'ADD', item });
  const removeItem = name => dispatch({ type: 'REMOVE', name });
  const setQty = (name, qty) => dispatch({ type: 'SET_QTY', name, qty: Math.max(1, qty) });
  const clear = () => dispatch({ type: 'CLEAR' });
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, setQty, clear, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;