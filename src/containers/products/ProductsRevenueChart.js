import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { randomColor } from '../../utils';

const ProductsRevenueChart = () => {

  const products = useSelector(state => state.products);
  const [productsWithRevenue, setProductsWithRevenue] = useState([]);

  useEffect(() => {
    let productsWithTotalRevenue = products.map((product) => (
      {
        ...product,
        totalRevenue: product.orders * product.sellingPrice
      }
    ));

    setProductsWithRevenue(productsWithTotalRevenue);
  }, [products])

  return (
    <ResponsiveContainer width='100%' height={450}>
      <PieChart>
        <Legend />
        <Pie data={productsWithRevenue} dataKey='totalRevenue' nameKey='title' cx='50%' cy='50%' innerRadius={60} outerRadius={150} >
          {
            products.map((_, index) => (
              <Cell key={`cell-${index}`} fill={randomColor()} />
            ))
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
};


export default ProductsRevenueChart;