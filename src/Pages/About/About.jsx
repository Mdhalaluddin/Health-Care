import './About.css';
import { TiTickOutline } from "react-icons/ti";

const About = () => {
    return (
        <nav className="container mx-auto my-10">
            <div className="hero bg-base-200 hero-content flex-col lg:flex-row">
                <div className="md:col-span-2 ml-12 w-full mb-16">
                    <img src="https://i.ibb.co/HqWXrQr/about-1.jpg" className="max-w-lg rounded-lg shadow-2xl w-full" />
                </div>
                <div>
                <h2 className="text-2xl font-bold text-center badge badge-outline p-6 mt-20 md:mt-1 md:ml-36">About Us</h2>
                    <h1 className="md:text-5xl  text-3xl font-bold mt-16 lg:mt-4 px-8">Why You Should Trust Us?<br /> <span className=" mt-4 text-red-400">Get Know About Us!</span></h1>
                    <p className="py-6 px-8">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="py-2 px-8">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                    <p className="py-2 px-8 flex items-center font-semibold"><span className='text-2xl mr-1'><TiTickOutline></TiTickOutline></span> Quality health care</p>
                    <p className="py-2 px-8 flex items-center font-semibold"><span className='text-2xl mr-1'><TiTickOutline></TiTickOutline></span> Only Qualified Doctors</p>
                    <p className="py-2 px-8 flex items-center font-semibold"><span className='text-2xl mr-1'><TiTickOutline></TiTickOutline></span> Medical Research Professionals</p>
                    <button className="btn btn-primary text-center mt-3 px-6 mx-8 mb-3">Read More</button>
                </div>
            </div>
            <div className="photo mb-5">
                <img src="https://i.ibb.co/qRmwtZX/about-2.jpg" alt="" className="border-4 lg:w-1/5 w-1/2 rounded-lg" />
            </div>
        </nav>
    );
};

export default About;