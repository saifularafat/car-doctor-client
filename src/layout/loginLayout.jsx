import { Outlet } from "react-router-dom";
import NavBer from "../pages/share/NavBer/NavBer";

const LoginLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBer />
            <Outlet />
        </div>
    );
};

export default LoginLayout;