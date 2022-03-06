import { cartReducer, productReducer } from "./Reducers";
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: []
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ''
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, productState, productDispatch }}>
      {props.children}
    </CartContext.Provider>
  )

}

export default CartContextProvider;