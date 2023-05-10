
const ServiceCart = ({ service }) => {
    console.log(service);
    const {img, title, price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src= {img} className="rounded-lg"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title font-inter font-bold text-2xl text-service-title">{title}</h2>
                <p className="text-xl font-inter font-semibold text-color-btn">${price}</p>
                <div className="card-actions">
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;