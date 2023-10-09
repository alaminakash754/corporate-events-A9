import { Link } from "react-router-dom";

const Services = ({ events }) => {
    const { id, title, sub_title, description, price, image } = events;
    return (
       
        <div className="card lg:card-side shadow-xl">
            <figure><img className="w-60 h-44" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="font-bold sm:text-center lg:text-left">{title}</h2>
                <p className="sm:text-center lg:text-left">{sub_title}</p>
                <p className="sm:text-center lg:text-left font-medium"><span className="text-orange-400">Price: </span>${price} </p>
                <div className="card-actions lg:justify-end md:justify-center sm:justify-center">
                    <Link to={`/events/${id}`}>
                    <button className="btn btn-secondary bg-orange-400 font-semibold">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;