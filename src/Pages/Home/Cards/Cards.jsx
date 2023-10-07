import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/Bs';


const Cards = ({ card }) => {
    const { name, image, short_description, id, price } = card;
    return (
        <div className="card w-96 bg-[#EFF5FF] shadow-xl my-5 ">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl h-[210px] w-full" />
            </figure>
            <div className="card-body">
                <div className="items-center text-center">
                    <div className="card-actions my-4 flex justify-between text-gray-700">
                    <h2 className="card-title">{name}</h2>
                        <div className= "text-lg font-medium text-justify flex items-center"><BsCurrencyDollar></BsCurrencyDollar><span className="text-xl text-green-500">{price}</span></div>
                    </div>
                    {
                        short_description.length > 100 ?
                            <p className="my-5 text-justify"> {short_description.slice(0, 100)}
                                <Link className="mt-6" to={`/card/${id}`}>
                                    <a href="" className="text-primary font-semibold underline hover:text-red-400 rounded-lg p-2 ">Read more</a>
                                </Link> </p>
                            :
                            <p>{short_description}</p>
                    }
                </div>
            </div>

        </div>
    );
};

Cards.propTypes = {
    card: PropTypes.array
}

export default Cards;