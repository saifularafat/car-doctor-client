import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRouter = ({ children }) => {
    const { user,loader } = useContext(AuthContext);

    if(loader){
        return <div className="text-center"><progress className="progress w-56 my-20"></progress></div>
    }
    if(user?.email){
        return children
    }

    return <Navigate to = '/login' state = ""></Navigate>;
};

export default PrivetRouter;