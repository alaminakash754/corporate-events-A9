
const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-normal text-orange-400 text-center mb-4">Contact Us</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">


                <div className="hero min-h-screen bg-base-200 rounded-lg">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" className="input h-28 input-bordered" name="" placeholder="Message" id="" />
                            </div>

                            <div className=" mt-6 justify-start">
                                <button className="btn bg-orange-400 justify-start">SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="bg-base-200 rounded-lg">
                    <div className=" bg-base-100 mt-36 rounded-lg space-y-5 px-3">
                        <h4 className="font-bold text-xl text-center">Contact Details</h4>
                        <p className=" text-lg"><span className="font-normal">Location: </span> Level 13, 2 Epzabeth St, Melbourne, Victoria 3000, Austrapa</p>
                        <p className=" text-lg"><span className="font-normal">Mobile: </span>1800 452 308</p>
                        <p className="text-lg"><span className="font-normal">Telephone: </span>+61 (8) 8234 3555</p>
                        <p className=" text-lg"><span className="font-normal">Email: </span>hello@spiritapp.com</p>
                        <p className="text-lg"><span className="font-normal">Web-site: </span>www.spiritapp.com</p>

                    </div>
                </div>
                <div className="bg-base-200 rounded-lg">
                    <h2 className="text-xl font-bold text-center mt-36">Google Map</h2>
                    <img className="mt-8 rounded-lg" src="https://i.ibb.co/mGcVCbL/map.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;