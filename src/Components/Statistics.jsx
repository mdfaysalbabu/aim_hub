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
      name: "Assignment-1",
      marks: 57,
      total: 60,
    },
    {
      name: "Ass-2",
      marks: 58,
      total: 60,
    },
    {
      name: "Assignment-3",
      marks: 60,
      total: 60,
    },
    {
      name: "Assignment-4",
      marks: 58,
      total: 60,
    },
    {
      name: "Assignments-5",
      marks: 60,
      total: 60,
    },
    {
      name: "Assignment-6",
      marks: 60,
      total: 60,
    },
    {
      name: "Assignment-7",
      marks: 60,
      total: 60,
    },
    {
      name: "Assignment-8",
      marks: 60,
      total: 60,
    },
  ];

  return (
    <>
    <div className="bg-gray-100 w-full  pb-20 mb-10 pt-10 ">
        <h1 className="text-center font-bold text-2xl">Statistics</h1>
      </div>
    <h2 className="text-4xl font-bold my-11 text-center">ComposedChart</h2>
      <div className="mt-20 justify-center items-center text-center flex mb-10">
        <div style={{ width: "80%", height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart width={730} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                dataKey="total"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="marks" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;
