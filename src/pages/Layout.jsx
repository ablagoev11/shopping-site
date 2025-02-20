import { Outlet } from "react-router-dom";
import Nav from "../components/Navigation/Nav";
import Landing from "./Landing/Landing";
import Categories from "../components/Categories/Categories";
function Layout() {
  return (
    <div>
      <Nav />
      <Landing>
        <Categories />
        <Outlet />
      </Landing>
    </div>
  );
}
export default Layout;
