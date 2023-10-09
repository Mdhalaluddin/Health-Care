import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <nav className="grid grid-cols-2 mx-auto rounded-lg mb-32">
            <div className="hero min-h-screen bg-green-500 bg-opacity-80">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-down" className="lg:text-5xl text-4xl font-bold text-white">Good Health Is The Root Of All Heppiness</h1>
                        <div data-aos="fade-up" className="text-white md:flex mt-16 mx-3 my-4 text-start">
                            <div className="border-l-4 mt-2 border-white">
                                <h2 className="text-3xl font-bold px-2">123</h2>
                                <p className="text-xl px-2">Expert Doctors</p>
                            </div>
                            <div className="border-l-4 mt-2 border-white">
                                <h2 className="text-3xl font-bold px-2">1234</h2>
                                <p className="text-xl px-2">Medical Stuff</p>
                            </div>
                            <div className="border-l-4 mt-2 border-white">
                                <h2 className="text-3xl font-bold px-2">12345</h2>
                                <p className="text-xl px-2">Total Patients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* carusal section */}
            <div>
                <div data-aos="fade-right" className="carousel w-full h-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        {/* text-stard */}
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/NLPBmML/carousel-1.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 md:text-5xl font-bold">Cardiology</h1>
                                </div>
                            </div>
                        </div>
                        {/* text-stard */}

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        {/* text-stard */}
                        <div className="hero lg:min-h-screen lg:min-w-full" style={{ backgroundImage: 'url(https://i.ibb.co/dBvVb6G/carousel-2.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 md:text-5xl font-bold">Pulmonary</h1>
                                </div>
                            </div>
                        </div>
                        {/* text-stard */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        {/* text-stard */}
                        <div className="hero min-h-[500px] w-full" style={{ backgroundImage: 'url(https://i.ibb.co/RH4d7G9/carousel-3.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 md:text-5xl font-bold">Neurology</h1>
                                </div>
                            </div>
                        </div>
                        {/* text-stard */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Banner;