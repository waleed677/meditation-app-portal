import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const AreaGraph = ({ title, fill }: { title?: string; fill?: string }) => {
  const data = [
    {
      name: "",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "Jan",
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mar",
      uv: 1500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Apr",
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "May",
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Jun",
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jul",
      uv: 2500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Aug",
      uv: 3000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sep",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Oct",
      uv: 2090,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Nov",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "",
      uv: 0,
      pv: 0,
      amt: 0,
    },
  ];

  return (
    <div
      style={{ borderColor: `${fill}50` }}
      className="bg-white drop-shadow rounded-lg ps-3 gap-5 border"
    >
      <h3 className="text-lg font-semibold mt-4">
        {title || "Monthly Report"}
      </h3>
      <ResponsiveContainer className="mt-7 mb-[-5px]" width="100%" height={200}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          {/* X and Y Axis */}
          <XAxis dataKey="name" />
          <YAxis />

          {/* Tooltip */}
          <Tooltip />

          {/* Area graph */}
          <Area type="monotone" dataKey="uv" stroke={fill} fill={`${fill}30`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaGraph;
