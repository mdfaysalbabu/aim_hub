import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Area,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Ass-1",
      marks: 57,
      total: 60
    },
    {
      name: "Ass-2",
      marks: 58,
      total: 60
    },
    {
      name: "Ass-3",
      marks: 60,
      total: 60
    },
    {
      name: "Ass-4",
      marks: 58,
      total: 60
    },
    {
      name: "Ass-5",
      marks: 60,
      total: 60
    },
    {
      name: "Ass-6",
      marks: 60,
      total: 60
    },
    {
      name: "Ass-7",
      marks: 60,
      total: 60
    },
    {
      name: "Ass-8",
      marks: 60,
      total: 60
    }
  ]

  return (
    <div className="mt-20 justify-center items-center text-center flex ">
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="marks" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
