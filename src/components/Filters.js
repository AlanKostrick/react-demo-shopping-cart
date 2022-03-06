import { Button, Form } from 'react-bootstrap';
import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import Rating from './Rating';

const Filters = () => {

  const { productState, productDispatch } = useContext(CartContext)
  const { byFastDelivery, byRating } = productState;

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          label="Fast Delivery Only"
          type="checkbox"
          onChange={() =>
            productDispatch({
              type: 'FILTER_BY_DELIVERY'
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <Rating
          rating={byRating}
          onClick={(index) =>
            productDispatch({
              type: 'FILTER_BY_RATING',
              payload: index + 1
            })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS"
          })
        }
      >Clear Filters</Button>
    </div>
  )
}

export default Filters;
