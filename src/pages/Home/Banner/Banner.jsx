import banner1 from '../../../../src/assets/images/homeCarousel/1.jpg';
import banner2 from '../../../../src/assets/images/homeCarousel/2.jpg';
import banner3 from '../../../../src/assets/images/homeCarousel/3.jpg';
import banner4 from '../../../../src/assets/images/homeCarousel/4.jpg';

const Banner = () => {
    const buttonStyle =<>
        <button className = 'main_btn mr-5' > Discover More</button>
        <button className='banner_btn'>Latest Project</button>
        </>
return (
    <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full rounded-xl" />
            <div className="absolute flex items-center left-0 top-0 rounded-xl bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 w-1/2 items-center pl-16'>
                    <h2 className='text-6xl font-bold md:w-96'>Affordable Price For Car Servicing</h2>
                    <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        {buttonStyle}
                    </div>
                </div>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5 slider_btn1">❮</a>
                <a href="#slide2" className="btn btn-circle slider_btn2">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="w-full rounded-xl" />
            <div className="absolute flex items-center rounded-xl left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 w-1/2 items-center pl-16'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    {buttonStyle}
                    </div>
                </div>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5 slider_btn1">❮</a>
                <a href="#slide3" className="btn btn-circle slider_btn2">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="w-full rounded-xl" />
            <div className="absolute flex items-center rounded-xl left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 w-1/2 items-center pl-16'>
                    <h2 className='text-3xl md:text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                    <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                       {buttonStyle}
                    </div>
                </div>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5 slider_btn1">❮</a>
                <a href="#slide4" className="btn btn-circle slider_btn2">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="w-full rounded-xl" />
            <div className="absolute flex items-center rounded-xl left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 w-1/2 items-center pl-16'>
                    <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                    <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    {buttonStyle}
                    </div>
                </div>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5 slider_btn1">❮</a>
                <a href="#slide1" className="btn btn-circle slider_btn2">❯</a>
            </div>
        </div>
    </div>
);
};

export default Banner;