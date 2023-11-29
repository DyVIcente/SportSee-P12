import { useState, useEffect } from "react";

import getData from "../../services/api";

import { useParams } from "react-router-dom";
import Calories from "../../assets/calories-icon.png";
import Carbs from "../../assets/carbs-icon.png";
import Fat from "../../assets/fat-icon.png";
import Protein from "../../assets/protein-icon.png";

import { ApiDataModel } from "../../services/apiDataModel";

import {
  SessionTimeGraph,
  RadarChartGraph,
  DailyActivityGraph,
  ScorePieGraph,
} from "../../components";

const Profil = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = await getData("USER_MAIN_DATA", id);
        if (!requestData) {
          alert("Erreur lors de la récupération des données");
          return;
        }

        const apiDataModel = new ApiDataModel(requestData);
        const formattedData = apiDataModel.getUserMainData();
        setData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!data.userInfos) return null;

  return (
    <div>
      <div className="pl-12 pt-10">
        <h1 className="text-4xl">
          Bonjour{" "}
          <span className="text-[#FF0101]">{data.userInfos.firstName}</span>
        </h1>
        <p className="text-[12px]">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>

      <div className="flex justify-around pt-10 gap-8 px-10">
        <section className="flex flex-col justify-between gap-8 w-3/4">
          <div className="bg-gray-200 rounded-md w-[100%]">
            <DailyActivityGraph />
          </div>

          <div className="flex justify-between gap-8 w-[100%]">
            <div className="w-[100%]">
              <SessionTimeGraph />
            </div>
            <div className="w-[100%]">
              <RadarChartGraph />
            </div>
            <div className="w-[100%]">
              <ScorePieGraph data={data} />
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-4 w-1/4">
          <div className="w-[100%] h-[100%] bg-slate-100 flex items-center gap-4 rounded-md">
            <img
              src={Calories}
              alt=""
              className="w-12 h-12 xl:w-[60px] xl:h-[60px] ml-10"
            />
            <div>
              <p className="text-[14px] xl:text-[20px] font-bold">
                {data.keyData.Calories}kCal
              </p>
              <p className="text-[14px] text-[#74798C]">Calories</p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-slate-100 flex items-center gap-4 rounded-md">
            <img
              src={Protein}
              alt=""
              className="w-12 h-12 xl:w-[60px] xl:h-[60px] ml-10"
            />
            <div>
              <p className="text-[14px] xl:text-[20px] font-bold">
                {data.keyData.Protéines}g
              </p>
              <p className="text-[14px] text-[#74798C]">Proteines</p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-slate-100 flex items-center gap-4 rounded-md">
            <img
              src={Carbs}
              alt=""
              className="w-12 h-12 xl:w-[60px] xl:h-[60px] ml-10"
            />
            <div>
              <p className="text-[14px] xl:text-[20px] font-bold">
                {data.keyData.Glucides}g
              </p>
              <p className="text-[14px] text-[#74798C]">Glucides</p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-slate-100 flex items-center gap-4 rounded-md">
            <img
              src={Fat}
              alt=""
              className="w-12 h-12 xl:w-[60px] xl:h-[60px] ml-10"
            />
            <div>
              <p className="text-[14px] xl:text-[20px] font-bold">
                {data.keyData.Lipides}g
              </p>
              <p className="text-[14px] text-[#74798C]">Lipides</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Profil };
