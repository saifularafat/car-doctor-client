import { Outlet } from "react-router-dom";
import NavBer from "../pages/share/NavBer/NavBer";

const LoginLayout = () => {
    return (
        <div>
            <NavBer />
            <Outlet />
        </div>
    );
};

export default LoginLayout;