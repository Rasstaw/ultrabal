import { Outlet } from "react-router-dom";
import HomePage from "../homePage/homePage";

function Layout() {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
}

export default Layout;
