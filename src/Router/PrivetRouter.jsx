import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation()

    if (loader) {
        return <div className="text-center"><progress className="progress w-56 my-20"></progress></div>
    }
    if (user?.email) {
        return children
    }

    return <Navigate
        to='/login'
        state={{ from: location }}
        replace>
    </Navigate>;
};

export default PrivetRouter;