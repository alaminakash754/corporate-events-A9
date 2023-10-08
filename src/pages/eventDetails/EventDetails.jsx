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
                <h2>{event.title}</h2>
                <p>{event.price}</p>
                <p>{event.description}</p>
            </div>
        </div>
    );
};

export default EventDetails;