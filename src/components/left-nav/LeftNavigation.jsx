import IconBike from "../../assets/icon-bike.png";
import IconIron from "../../assets/icon-iron.png";
import IconSwim from "../../assets/icon-swim.png";
import IconZen from "../../assets/icon-zen.png";

const LeftNavigation = () => {
  return (
    <div className="absolute h-[100%] w-[70px] xl:w-[90px] bg-black">
      <div className="flex flex-col items-center gap-4 relative top-[20%]">
        <img
          src={IconZen}
          alt=""
          className="w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] rounded-[6px]"
        />
        <img
          src={IconSwim}
          alt=""
          className="w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] rounded-[6px]"
        />
        <img
          src={IconBike}
          alt=""
          className="w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] rounded-[6px]"
        />
        <img
          src={IconIron}
          alt=""
          className="w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] rounded-[6px]"
        />
      </div>
      <p
        className="text-white text-[12px] whitespace-nowrap relative top-72"
        style={{
          transform: "rotate(-90deg)",
        }}
      >
        Copiryght, SportSee 2020
      </p>
    </div>
  );
};

export { LeftNavigation };
