import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Profil } from "./pages";
import { RootLayout } from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/user/:id" element={<Profil />} />
    </Route>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
