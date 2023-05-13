import { Rating } from "@smastrom/react-rating";
import img1 from '../../../assets/images/products/1.png'

const HProduct = () => {
    return (
        <div className="mt-10">
            <div className="text-center mb-10">
                <h5 className='text-lg font-inter font-bold text-color-btn'>Popular Products</h5>
                <h2 className="text-4xl md:text-[45px] font-bold font-inter text-title-color leading-[54px] py-1">Browser Our Products</h2>
                <p className="font-inter text-description-color">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
                <div className="card w-full h-screen  bg-base-100 shadow-xl mb-24">
                    <figure className="bg-slate-200 m-5 rounded-lg">
                        <img src={img1} className="rounded-lg" />
                    </figure>
                    <div className="card-body text-center mx-auto">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                            className="mx-auto mb-3"
                        />
                        <h2 className="card-title font-inter font-bold text-2xl text-service-title mb-0">Car Engine Plug</h2>
                        <p className="text-xl font-inter font-semibold text-color-btn">$200.00</p>
                        <div className="card-actions">
                        </div>
                        <div className='flex justify-between items-center mx-auto'>
                        </div>
                    </div>

                </div>
                <div className="card w-full h-screen  bg-base-100 shadow-xl mb-24">
                    <figure className="bg-slate-200 m-5 rounded-lg">
                        <img src={img1} className="rounded-lg" />
                    </figure>
                    <div className="card-body text-center mx-auto">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                            className="mx-auto mb-3"
                        />
                        <h2 className="card-title font-inter font-bold text-2xl text-service-title mx-auto">Car Engine Plug</h2>
                        <p className="text-xl font-inter font-semibold text-color-btn">$200.00</p>
                        <div className="card-actions">
                        </div>
                        <div className='flex justify-between items-center mx-auto'>
                        </div>
                    </div>

                </div>
                <div className="card w-full h-screen  bg-base-100 shadow-xl mb-24">
                    <figure className="bg-slate-200 m-5 rounded-lg">
                        <img src={img1} className="rounded-lg" />
                    </figure>
                    <div className="card-body text-center mx-auto">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                            className="mx-auto mb-3"
                        />
                        <h2 className="card-title font-inter font-bold text-2xl text-service-title mx-auto">Car Engine Plug</h2>
                        <p className="text-xl font-inter font-semibold text-color-btn">$200.00</p>
                        <div className="card-actions">
                        </div>
                        <div className='flex justify-between items-center mx-auto'>
                        </div>
                    </div>

                </div>
                <div className="card w-full h-screen  bg-base-100 shadow-xl mb-24">
                    <figure className="bg-slate-200 m-5 rounded-lg">
                        <img src={img1} className="rounded-lg" />
                    </figure>
                    <div className="card-body text-center mx-auto">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                            className="mx-auto mb-3"
                        />
                        <h2 className="card-title font-inter font-bold text-2xl text-service-title mx-auto">Car Engine Plug</h2>
                        <p className="text-xl font-inter font-semibold text-color-btn">$200.00</p>
                        <div className="card-actions">
                        </div>
                        <div className='flex justify-between items-center mx-auto'>
                        </div>
                    </div>

                </div>
                <div className="card w-full h-screen  bg-base-100 shadow-xl mb-24">
                    <figure className="bg-slate-200 m-5 rounded-lg">
                        <img src={img1} className="rounded-lg" />
                    </figure>
                    <div className="card-body text-center mx-auto">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                            className="mx-auto mb-3"
                        />
                        <h2 className="card-title font-inter font-bold text-2xl text-service-title mx-auto">Car Engine Plug</h2>
                        <p className="text-xl font-inter font-semibold text-color-btn">$200.00</p>
                        <div className="card-actions">
                        </div>
                        <div className='flex justify-between items-center mx-auto'>
                        </div>
                    </div>

                </div>
                <div className="card w-full h-screen  bg-base-100 shadow-xl mb-24">
                    <figure className="bg-slate-200 m-5 rounded-lg">
                        <img src={img1} className="rounded-lg" />
                    </figure>
                    <div className="card-body text-center mx-auto">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                            className="mx-auto mb-3"
                        />
                        <h2 className="card-title font-inter font-bold text-2xl text-service-title mx-auto">Car Engine Plug</h2>
                        <p className="text-xl font-inter font-semibold text-color-btn">$200.00</p>
                        <div className="card-actions">
                        </div>
                        <div className='flex justify-between items-center mx-auto'>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-0 mb-10 text-center">
                <button className="header_btn">View Product</button>
            </div>
        </div>
    );
};

export default HProduct;