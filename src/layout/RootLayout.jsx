import { Outlet } from "react-router-dom";

import { Header, LeftNavigation } from "../components";

const RootLayout = () => (
  <div>
    <header>
      <Header />
      <LeftNavigation />
    </header>
    <main className="ml-[117px]">
      <Outlet />
    </main>
  </div>
);

export { RootLayout };
