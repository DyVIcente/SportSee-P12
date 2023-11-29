import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import getData from "../../services/api";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className="custom-tooltip"
        style={{ background: "#E60000", padding: "10px", color: "#FFF" }}
      >
        <p className="text-[7px] leading-[24px] text-center">{`${data.kilogram}kg`}</p>
        <p className="text-[7px] leading-[24px] text-center">{`${data.calories}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const DailyActivityGraph = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activityData = await getData("USER_ACTIVITY", id);
        setData(activityData.data.sessions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching activity data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      data[i].day = i + 1;
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <div className="relative left-2 flex gap-4 top-2">
          <h1 className="text-[#20253A]">Activité quotidienne</h1>
        </div>
        <div className="absolute right-2 flex gap-4 top-2">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#282D30] rounded-full self-center" />
            <p className="text-[#74798C]">Poids (kg)</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#E60000] rounded-full self-center" />
            <p className="text-[#74798C]">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} barSize={7} barGap={7}>
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <XAxis dataKey="day" stroke="3" dy={10} />
            <YAxis
              yAxisId="right"
              orientation="right"
              dataKey="kilogram"
              domain={["dataMin - 1", "dataMax"]}
              tickCount="3"
              axisLine={false}
              tickLine={false}
              dx={10}
              dy={-6}
            />
            <YAxis
              yAxisId="left"
              stroke="#8884d8"
              hide={true}
              dataKey="calories"
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="#282D30"
              radius={[5, 5, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="#E60000"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      payload: PropTypes.shape({
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      }),
    })
  ),
};

export { DailyActivityGraph };
