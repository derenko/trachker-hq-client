import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from 'semantic-ui-react';

import Product from '../../components/products/ProductCard';

const ProductsList = () => {
  const products = useSelector(state => state.products);

  return (
    <>
      {
        products.map(product => <Product {...product} key={product._id} />)
      }

      <div className="pagination-centered">
        <Pagination totalPages={1} />
      </div>
    </>
  )
}

export default ProductsList;