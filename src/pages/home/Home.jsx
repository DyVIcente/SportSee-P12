import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 p-20 mt-20 max-w-min m-auto rounded-xl shadow-md">
      <h1 className="uppercase font-bold text-center">
        Séléctionnez le profil
      </h1>
      <div className="flex flex-col gap-4 pt-4">
        <NavLink
          to="user/12"
          className="bg-white p-2 rounded-md shadow-sm hover:bg-slate-100"
        >
          Profil 1
        </NavLink>
        <NavLink
          to="user/18"
          className="bg-white p-2 rounded-md shadow-sm hover:bg-slate-100"
        >
          Profil 2
        </NavLink>
      </div>
    </div>
  );
};

export { Home };
