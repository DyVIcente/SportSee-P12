import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import getData from "../../services/api";
import PropTypes from "prop-types";
import { ApiDataModel } from "../../services/apiDataModel";

const RadarChartGraph = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await getData("USER_PERFORMANCE", id);
        if (!request) throw new Error("Data error");
        const apiDataModel = new ApiDataModel(request);
        const performanceData = apiDataModel.getUserPerformance();
        setData(performanceData);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="bg-[#282D30] rounded-md ">
      <ResponsiveContainer
        width="100%"
        height={200}
        className="text-[0.3rem] xl:text-[0.6rem] "
      >
        <RadarChart cx="50%" cy="50%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarChartGraph.propTypes = {
  id: PropTypes.string.isRequired,
};

export { RadarChartGraph };
