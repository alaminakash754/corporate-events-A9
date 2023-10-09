import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const events = useLoaderData();
    const {id} = useParams();
    const event = events.find(job => job.id == id)
    console.log(event)
    return (
        <div>
            
            <div className="mt-10">
                <img className="mx-auto" src={event.image} alt="" />
                <h2 className="text-xl font-bold text-orange-400 my-4">{event.title}</h2>
                <p className="text-lg font-semibold text-orange-400 mb-5"> <span className="font-medium">Price: $</span>{event.price}</p>
                <p className="mb-5"><span className="text-lg font-semibold text-orange-400">Details: <br /></span> {event.description}</p>
            </div>
        </div>
    );
};

export default EventDetails;