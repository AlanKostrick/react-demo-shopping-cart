import { Button, Card } from 'react-bootstrap';
import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import Rating from './Rating';

const SingleProduct = ({ product }) => {

  //need stuff here what do we need???? 
  const { cartState, cartDispatch } = useContext(CartContext)
  const { cart } = cartState;

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>${product.price}</span>
            {product.fastDelivery ?
              <div>1 day delivery</div> :
              <div>3+ day delivery</div>
            }
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ?
            <Button
              onClick={() =>
                cartDispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product
                })
              }
              variant="danger"
            >
              Remove
            </Button>
            :
            <Button
              onClick={() =>
                cartDispatch({
                  type: 'ADD_TO_CART',
                  payload: product
                })
              }
            >
              Add
            </Button>
          }

        </Card.Body>
      </Card>
    </div >
  )
}

export default SingleProduct;
