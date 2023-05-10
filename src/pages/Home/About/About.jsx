import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-10/12 md:h-[380px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 h-3/5 absolute right-8 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-4 p-5'>
                    <h5 className='text-lg font-inter font-bold text-color-btn'>About Us</h5>
                    <h1 className="text-4xl md:text-[45px] font-bold font-inter text-title-color leading-[54px]">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="font-inter text-description-color">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className='font-inter text-description-color'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="main_btn ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;