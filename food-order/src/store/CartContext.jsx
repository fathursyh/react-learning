import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existItem > -1) {
      const exist = state.items[existItem];
      const updatedItem = {
        ...exist,
        quantity: exist.quantity + 1,
      };
      updatedItems[existItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existItem = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existItem];
    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existItem, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existItem] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchAction({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatchAction({ type: "REMOVE_ITEM", id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
