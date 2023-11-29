import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import getData from "../../services/api";
import PropTypes from "prop-types";
import { ApiDataModel } from "../../services/apiDataModel";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div
        className="custom-tooltip"
        style={{
          background: "white",
          paddingLeft: "5px",
          paddingRight: "5px",
          color: "black",
        }}
      >
        <p className="text-[7px] leading-[24px] text-center">{`${data.value}min`}</p>
      </div>
    );
  }
  return null;
};

const SessionTimeGraph = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const averageSessionData = await getData("USER_AVERAGE_SESSIONS", id);

        if (!averageSessionData) {
          throw new Error("Format de données incorrect");
        }

        const apiDataModel = new ApiDataModel(averageSessionData);
        const formattedData = apiDataModel.getUserAverageSessions();
        setData(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, [id]);

  if (data.length === 0) return null;

  return (
    <div
      className="relative s rounded-md "
      style={{
        background: "linear-gradient(to right, #FF0000 71%, #E60000 29%)",
      }}
    >
      <div className="absolute top-4 text-xs left-4">
        <h1 className="text-white text-[0.6rem] xl:text-[15px] opacity-[0.5]">
          Durée moyenne des <br /> sessions
        </h1>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ stroke: "white" }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 20"]}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export { SessionTimeGraph };
