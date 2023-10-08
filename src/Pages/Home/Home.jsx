import { useLoaderData } from "react-router-dom";
import Banner from "./Bannar/Banner";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import About from "../About/About";



const Home = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div>
            <Banner></Banner>
            <div className="">
            <About></About>
            </div>
            <div className="mt-16 mx-auto ">
                    <h2 className="text-4xl text-center font-bold">Health Care Solutions</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 mx-auto container">
                    {
                        cards.map(card => <Cards key={card.id} card={card} ></Cards>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;