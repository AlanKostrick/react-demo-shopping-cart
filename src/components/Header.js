import { Dropdown, Form, Navbar } from 'react-bootstrap';
import React, { useContext } from 'react';

import { AiFillDelete } from "react-icons/ai";
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const {
    cartState: { cart },  //we need to see the items in our cart
    cartDispatch,        //we need to allow user to remove items from their cart
    productDispatch     //we will provide users the ability to search query their products
  } = useContext(CartContext);

  const location = useLocation();

  return (
    <Navbar bg="dark" style={{ height: '80px', justifyContent: 'space-between' }}>
      <Navbar.Brand>
        <Link to={location.pathname === '/' ? "/cart" : '/'}> Shopping Cart </Link>
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
      <Dropdown alignRight>
        <Dropdown.Toggle variant="success">
          <FaShoppingCart color="white" fontSize="25px" />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ minWidth: '370px' }}>
          {cart.length > 0 ? (
            <>
              {cart.map((cartItem) => (
                <span className="cartItem" key={cartItem.id}>
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="cartItemImg"
                  />
                  <div className="cartItemDetail">
                    <span>{cartItem.name}</span>
                    <span>${cartItem.price}</span>
                  </div>
                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      cartDispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: cartItem
                      })
                    }}
                  />
                </span>
              ))}
            </>
          ) :
            <span style={{ padding: '10px' }}>Cart is empty!</span>
          }
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  )
}

export default Header;
