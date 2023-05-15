import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-six-silk.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="mt-6">
            <div className="text-center mb-10">
                <h5 className='text-lg font-inter font-bold text-color-btn'>Service</h5>
                <h2 className="text-4xl md:text-[45px] font-bold font-inter text-title-color leading-[54px]">Our Service Area</h2>
                <p className="font-inter text-description-color">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
            <div className="mt-12 mb-28 text-center">
                <button className="header_btn">More Services</button>
            </div>

        </div>
    );
};

export default Service;