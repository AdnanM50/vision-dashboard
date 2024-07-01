"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "january",
    uv: 160,
    pv: 240,
    amt: 500,
  },
  {
    name: "February",
    uv: 500,
    pv: 139,
    amt: 500,
  },
  {
    name: "March",
    uv: 400,
    pv: 169,
    amt: 500,
  },
  {
    name: "April",
    uv: 358,
    pv: 189,
    amt: 500,
  },
  {
    name: "May",
    uv: 269,
    pv: 349,
    amt: 500,
  },
  {
    name: "June",
    uv: 189,
    pv: 380,
    amt: 500,
  },
  {
    name: "July",
    uv: 349,
    pv: 430,
    amt: 500,
  },
];

const Areachart = () => {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-t from-[#060b28d8] to-[#0a0e23a1]">
        <AreaChart
          className="area-chart"
          width={660}
          height={290}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: -5,
            bottom: 0,
          }}
          //   padding={{
          //     left: 20,
          //     right: 20
          //   }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />

          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#0075FF"
            fill="#0075FF"
          />
        </AreaChart>
      </div>
    </>
  );
};

export default Areachart;
