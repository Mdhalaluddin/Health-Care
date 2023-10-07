import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    console.log('card details',cards);
    const {id} = useParams();
    // const idInt = parseInt(id);
    const card = cards.find(card => card.id === id)
    console.log(card);
    return (
        <div>
            <h2 className="text-4xl">Card Details</h2>
        </div>
    );
};

export default CardDetails;