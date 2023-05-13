import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HProduct from "../HProduct/HProduct";
import Service from "../Srevice/Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Service />
            <Contact />
            <HProduct />
        </div>
    );
};

export default Home;