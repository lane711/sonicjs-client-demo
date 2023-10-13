import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
