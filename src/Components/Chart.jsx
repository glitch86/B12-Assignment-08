import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Chart = ({ rating }) => {
  return (
    <div className="w-full h-80">
      <h2 className="font-semibold text-xl mb-2">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={[...rating].reverse()}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis type="number"></XAxis>
          <YAxis dataKey="name" type="category"></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Bar dataKey="count" fill="#00DFA2" barSize={20}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
