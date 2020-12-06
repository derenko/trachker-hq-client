import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import { salesByMonthsMock } from '../../mocks';

const data = salesByMonthsMock;

const AllMonthsStatsChart = () => {

  const formatter = (value, name) => {
    switch (name) {
      case 'views':
        return [value, 'Перегляди веб сайту'];
      case 'orders':
        return [value, 'Замовлення'];
      case 'revenue':
        return [value, 'Прибуток'];
      default:
        return [value, name];
    }
  }

  return (
    <BarChart width={1125} height={250} data={data}>
      <XAxis dataKey='month' />
      <YAxis />
      <Tooltip formatter={formatter} />
      <Bar dataKey='views' fill='#313573' />
      <Bar dataKey='orders' fill='#45AD04' />
      <Bar dataKey='revenue' fill='#3B5998' />
    </BarChart>
  )
}

export default AllMonthsStatsChart;