import { Form, Navbar } from 'react-bootstrap';
import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {

  const {
    cartState: { cart },  //we need to see the items in our cart
    cartDispatch,        //we need to allow user to remove items from their cart
    productDispatch     //we will provide users the ability to search query their products
  } = useContext(CartContext);

  return (
    <Navbar bg="dark" style={{ height: '80px' }}>
      <Navbar.Brand>
        <Link to="/cart"> Shopping Cart </Link>
      </Navbar.Brand>
      <Navbar.Text>
        <Form.Control
          style={{ width: '500px' }}
          type="search"
          placeholder="Search a product..."
          onChange={(e) =>
            productDispatch({
              type: 'FILTER_BY_SEARCH',
              payload: e.target.value
            })
          }
        >
        </Form.Control>
      </Navbar.Text>
    </Navbar>
  )
}

export default Header;
