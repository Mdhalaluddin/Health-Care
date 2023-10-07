import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from 'react-icons/Bs';


const CardDetails = () => {
    const cards = useLoaderData();
    console.log('card details', cards);
    const { id } = useParams();
    // const idInt = parseInt(id);
    const card = cards.find(card => card.id === id)
    console.log(card);
    return (
        <div className="">
            <div className="container mx-auto w-4/6 flex justify-center h-1/4">
                <div className="card card-compact w-4/6  bg-base-100 shadow-xl mt-12">
                    <figure>
                        <img src={card.image} alt="Shoes" className="w-full " />
                    </figure>
                    <div className="card-body ">
                        <div className="card-actions my-4 flex justify-between text-gray-700">
                            <h2 className="card-title">{card.name}</h2>
                            <div className="text-lg font-medium text-justify flex items-center"><BsCurrencyDollar></BsCurrencyDollar>
                            <span className="text-xl text-green-500">{card.price}</span></div>
                        </div>
                        <p className="justify-text">{card.short_description}</p>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default CardDetails;