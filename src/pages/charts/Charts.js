import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/styles";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

// components
import Widget from "../../components/Widget/Widget";
import ApexLineChart from "./components/ApexLineChart";
import ApexHeatmap from "./components/ApexHeatmap";
import ApexRadarChart from "./components/ApexRadarChart";
import ApexBarChart from "./components/ApexBarChart";

const lineChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

export default function Charts(props) {
  var theme = useTheme();

  // local
  var [activeIndex, setActiveIndexId] = useState(0);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Apex Line Chart" noBodyPadding>
            <ApexLineChart />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Apex Heatmap" noBodyPadding>
            <ApexHeatmap />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title={"Apex Radar Chart"} noBodyPadding>
            <ApexRadarChart />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title={"Apex Bar Chart"} noBodyPadding>
            <ApexBarChart />
          </Widget>
        </Grid>
        <Grid item xs={12} md={8}>
          <Widget title="Simple Line Chart" noBodyPadding>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart
                width={500}
                height={300}
                data={lineChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke={theme.palette.primary.main}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke={theme.palette.secondary.main}
                />
              </LineChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item xs={12} md={4}>
          <Widget title="Pie Chart with Tooltips" noBodyPadding>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={200} height={300}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={pieChartData}
                  cx={200}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill={theme.palette.primary.main}
                  dataKey="value"
                  onMouseEnter={(e, id) => setActiveIndexId(id)}
                />
              </PieChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// ################################################################

function renderActiveShape(props) {
  var RADIAN = Math.PI / 180;
  var {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  var sin = Math.sin(-RADIAN * midAngle);
  var cos = Math.cos(-RADIAN * midAngle);
  var sx = cx + (outerRadius + 10) * cos;
  var sy = cy + (outerRadius + 10) * sin;
  var mx = cx + (outerRadius + 30) * cos;
  var my = cy + (outerRadius + 30) * sin;
  var ex = mx + (cos >= 0 ? 1 : -1) * 22;
  var ey = my;
  var textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}
