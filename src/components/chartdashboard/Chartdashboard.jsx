import "./chartdashboard.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chartdashboard = ({ aspect, title }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`chart ${darkMode ? "dark" : ""}`}>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke={darkMode ? "#eee" : "gray"}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#333" : "rgb(228, 225, 225)"}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chartdashboard;
