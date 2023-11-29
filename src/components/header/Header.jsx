import { NavLink } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import Logotext from "../../assets/Logotext.png";

const Header = () => (
  <div className="bg-black h-[70px] xl:h-[90px] flex items-center justify-between px-8 relative">
    <div className="flex items-center gap-2">
      <img
        src={Logo}
        alt=""
        className="w-[30.2px] h-[30.7px] xl:w-[50.2px] xl:h-[50.2px]"
      />
      <img src={Logotext} alt="" className="w-[109.3px]" />
    </div>

    <NavLink href="" className="text-white text-[16px] xl:text-[24px]">
      Accueil
    </NavLink>
    <NavLink href="" className="text-white text-[16px] xl:text-[24px]">
      Profil
    </NavLink>
    <NavLink href="" className="text-white text-[16px] xl:text-[24px]">
      Réglages
    </NavLink>
    <NavLink href="" className="text-white text-[16px] xl:text-[24px]">
      Communauté
    </NavLink>
  </div>
);

export { Header };
