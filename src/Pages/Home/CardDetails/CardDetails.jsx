import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    console.log('card details', cards);
    const { id } = useParams();
    // const idInt = parseInt(id);
    const card = cards.find(card => card.id === id)
    console.log(card);
    return (
        <div className="container mx-auto w-full">
            <div className="card card-compact w-1/2 bg-base-100 shadow-xl mt-12">
                <figure><img src={card.image} alt="Shoes" className="w-full" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-center justify-center">{card.name}</h2>
                    <p>{card.short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;