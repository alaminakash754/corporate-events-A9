import { useLoaderData } from "react-router-dom";
import Slider from "./shared/Slider/Slider";
import Services from "./shared/services/Services";
import Footer from "./shared/Footer/Footer";
import Contact from "./shared/contact/Contact";

const Home = () => {
    const eventCards = useLoaderData();
    console.log(eventCards)
    return (
        <div className="space-y-10">
            <Slider></Slider>
            <h2 className="text-4xl font-bold text-orange-300 text-center my-8 border-b-4">Our Services</h2>
            <div className="space-y-5 grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    eventCards.map(eventCard => <Services key={eventCard.id}
                        events={eventCard}></Services>)
                }
            </div>
            <div>
                <h2 className="text-5xl mt-3 font-semibold text-orange-400 text-center mb-10 ">Events Gallery</h2>
                <p className="border-b-4 border-orange-400 mb-3"></p>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
                    <div className="">
                        <img className="rounded-lg h-[410px] " src="https://i.ibb.co/g4FCbtJ/restaurant-interior.jpg" alt="" />
                    </div>
                    <div className="col-span-2">
                        <img className="rounded-lg " src="https://i.ibb.co/znYthSt/corporate-businessman-giving-presentation-large-audience.jpg" alt="" />
                    </div>
                    <div className=" col-span-2">
                        <img className="rounded-lg " src="https://i.ibb.co/LdLh5BW/people-taking-part-business-event.jpg" alt="" />
                    </div>
                    <div className="">
                        <img className="rounded-lg h-[410px] " src="https://i.ibb.co/g66phfz/business-people-office-workplace-interaction-conversation-teamwork-concept.jpg" alt="" />
                    </div>
                    <div className="col-span-2">
                        <img className="rounded-lg " src="https://i.ibb.co/f45sTx4/waiting-room-with-monitors.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg h-[410px] " src="https://i.ibb.co/g4FCbtJ/restaurant-interior.jpg" alt="" />
                    </div>

                </div>

            </div>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;