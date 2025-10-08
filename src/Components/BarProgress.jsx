import React from "react";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = ({ singleData }) => {
  console.log(singleData);

  const { ratings } = singleData;
  const ratingsRev = [...ratings].reverse();
  console.log(ratingsRev);

  return (
    <div className="md:h-90 h-70 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={ratingsRev}
          layout="vertical"
          
        >
          
          <XAxis type="number" axisLine={false} tickLine={false}/>
          <YAxis
            dataKey="name"
            type="category"
            width={60}
                      tick={{ fontSize: 16 }}
                      axisLine={false}
                      tickLine={false}
                      
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#FF8811"
            activeBar={<Rectangle fill="teal" stroke="blue" />}
          />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
