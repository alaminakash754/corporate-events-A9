import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1100px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;