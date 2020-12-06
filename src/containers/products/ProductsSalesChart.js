import React from 'react';
import { useSelector } from 'react-redux';

import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { randomColor } from '../../utils';

const ProductsSalesChart = () => {

  const products = useSelector(state => state.products)

  return (
    <ResponsiveContainer width='100%' height={450}>
      <PieChart>
        <Legend />
        <Pie data={products} dataKey='orders' nameKey='title' cx='50%' cy='50%' innerRadius={60} outerRadius={150} >
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


export default ProductsSalesChart;