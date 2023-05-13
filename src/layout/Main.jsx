import { Outlet } from "react-router-dom";
import NavBer from "../pages/share/NavBer/NavBer";
import Footer from "../pages/share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <NavBer />
                <div className="min-h-[calc(100vh-296px)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;