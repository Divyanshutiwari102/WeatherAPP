import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ForecastChart = ({ forecast }) => {
  const chartData = forecast.map((d) => ({
    label: new Date(d.date).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    temp: Math.round(d.avgTemp),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData}>
        <XAxis dataKey="label" stroke="#888" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temp"
          stroke="#facc15"
          fill="#facc1533"
          strokeWidth={3}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ForecastChart;
