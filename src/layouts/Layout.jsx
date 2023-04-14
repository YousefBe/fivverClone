import { Outlet } from "react-router-dom";
import Navbar from "../components/Globals/Navbar";
import "./layout.scss";
import Footer from "../components/Globals/Footer";
function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
