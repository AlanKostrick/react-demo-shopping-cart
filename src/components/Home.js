import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import faker from 'faker';

const products = [...Array(12)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(2, 20),
  image: faker.random.image(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5])
}));

const Home = () => {

  //destructure productState from the context 
  const { productState } = useContext(CartContext)
  //destruct attributes from productState
  const { byFastDelivery, byRating, searchQuery } = productState;

  const filterProductsHandler = () => {
    let filteredProducts = products;

    if (byFastDelivery) {
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      filteredProducts = filteredProducts.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    return filteredProducts;
  }

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {filterProductsHandler().map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home;
