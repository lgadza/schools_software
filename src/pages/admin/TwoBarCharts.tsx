import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Form 1',
    girls: 4000,
    boys: 2400,
    amt: 2400,
  },
  {
    name: 'Form 2',
    girls: 3000,
    boys: 1398,
    amt: 2210,
  },
  {
    name: 'Form 3',
    girls: 2000,
    boys: 9800,
    amt: 2290,
  },
  {
    name: 'Form 4',
    girls: 2780,
    boys: 3908,
    amt: 2000,
  },
  {
    name: 'Form 5',
    girls: 1890,
    boys: 4800,
    amt: 2181,
  },
  {
    name: 'Form 6',
    girls: 2390,
    boys: 3800,
    amt: 2500,
  },
  
];

const TwoBarCharts: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="boys" fill="#8884d8" background={{ fill: '#eee' }} />
        <Bar dataKey="girls" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TwoBarCharts;
