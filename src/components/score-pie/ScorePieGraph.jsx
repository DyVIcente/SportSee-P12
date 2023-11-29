import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const ScorePieGraph = ({ data }) => {
  const score = data.todayScore ? data.todayScore : data.score;
  const dataArray = [{ name: "score", value: score }];

  return (
    <div className="relative">
      <div>
        <h1 className="absolute left-4 top-2 text-[0.7rem] xl:text-[15px]">
          Score
        </h1>
      </div>
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <p>
          {data.todayScore * 100 || data.score * 100} % <br /> de votre <br />
          objectif
        </p>
      </div>
      <div className="bg-[#FBFBFB] rounded-md z-0">
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            innerRadius="0%"
            outerRadius="0%"
            barSize={20}
            startAngle={90}
            endAngle={450}
            data={dataArray}
          >
            <RadialBar
              data={[{ value: 1 }]}
              dataKey="value"
              barSize={150}
              fill="#FFF"
              isAnimationActive={false}
            />
            <RadialBar
              dataKey="value"
              barSize={10}
              cornerRadius={100}
              fill="#FF0000"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

ScorePieGraph.propTypes = {
  data: PropTypes.object.isRequired,
};

export { ScorePieGraph };
