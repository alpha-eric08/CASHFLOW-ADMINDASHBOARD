import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar";


const Layout = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="w-full">
            <div className="flex justify-end">
              <Navbar />
            </div>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout