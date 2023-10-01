import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 240,
    amt: 240,
  },
  {
    name: 'Feb',
    pv: 139,
    amt: 221,
  },
  {
    name: 'Mar',
    pv: 980,
    amt: 229,
  },
  {
    name: 'Apr',
    pv: 390,
    amt: 200,
  },
  {
    name: 'May',
    pv: 480,
    amt: 211,
  },
  {
    name: 'Jun',
    pv: 380,
    amt: 200,
  },
  {
    name: 'Jul',
    pv: 430,
    amt: 200,
  },
];

const LineChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
