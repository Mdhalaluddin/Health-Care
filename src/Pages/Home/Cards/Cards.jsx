import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Cards = ({ card }) => {
    const { name, image, short_description, id } = card;
    return (
        <div className="card w-96 bg-[#EFF5FF] shadow-xl my-5 ">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl h-[210px] w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                {
                    short_description.length >100 ?
                    <p className="mt-4">{short_description.slice(0,100)} <br/> 
                    <Link className="mt-6" to={`/card/${id}`}>
                    <a href="" className="fa fa-plus text-primary me-3 hover:bg-slate-300 rounded-lg p-2 ">Read more</a>
                    </Link> </p>
                :
                <p>{short_description}</p>
                }
                <div className="card-actions">
                    
                </div>
            </div>
        </div>
    );
};

Cards.propTypes ={
    card: PropTypes.array
}

export default Cards;