const Services = ({ events }) => {
    const { id, title, sub_title, description, price, image } = events;
    return (
       
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-60 h-44" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="font-bold sm:text-center lg:text-left">{title}</h2>
                <p className="sm:text-center lg:text-left">{sub_title}</p>
                <div className="card-actions lg:justify-end md:justify-center sm:justify-center">
                    <button className="btn btn-secondary bg-orange-400 font-semibold">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;