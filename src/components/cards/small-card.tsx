import { Area, AreaChart, Bar, BarChart, ResponsiveContainer } from "recharts";

const SmallCard = ({
  title,
  count,
  fill,
}: {
  title?: string;
  count?: number;
  fill?: string;
}) => {
  const data = [
    {
      name: "Page A",
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page A",
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page A",
      uv: 1500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page A",
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page A",
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 2500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 3000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 2090,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div
      style={{ borderColor: `${fill}50` }}
      className="bg-white drop-shadow rounded-lg ps-3  flex items-center gap-5  justify-between border"
    >
      <div>
        <h3 className="text-base font-bold">{title}</h3>
        <h3 className="text-xl font-bold text-zinc-600">{count}</h3>
      </div>

      <ResponsiveContainer className="mt-7 mb-[-5px]" width={150} height={70}>
        {/* <BarChart data={data}>
          <Bar barSize="10" dataKey="uv" fill={fill} />
        </BarChart> */}
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
          <Area type="monotone" dataKey="uv" stroke={fill} fill={`${fill}30`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmallCard;
