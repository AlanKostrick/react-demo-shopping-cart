import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from '../context/CartContext';

const Cart = () => {

  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);

  //display products 
  //remove products from cart screen
  // display the total payment amount for all items

  const [total, setTotal] = useState();

  //will render on page load ORRRRR when the variables in the array change
  useEffect(() => {
    let calculatedTotal = 0;
    cart.map(cartItem => {
      return calculatedTotal += Number(cartItem.price);
    });
    setTotal(calculatedTotal);
  }, [cart]) //this array will drive page reloads


  console.log('TOTAL', total);

  return (
    <div>This is the Cart Screen</div>
  )
}

export default Cart;
