import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import '@smastrom/react-rating/style.css'
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    console.log(service);
    const { _id,img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-inter font-bold text-2xl text-service-title">{title}</h2>
                <p className="text-xl font-inter font-semibold text-color-btn">${price}</p>
                <div className="card-actions">
                </div>
                <div className='flex justify-between items-center'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={5}
                        readOnly
                    />
                    <Link to={`/checkOut/${_id}`}>
                        <button>
                            <FaArrowCircleRight
                                className='w-8 h-6 
                    bg-white text-color-btn'
                            />
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCart;