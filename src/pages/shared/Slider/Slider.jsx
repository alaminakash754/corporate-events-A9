const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/wzTKVhC/banner2.jpg" className="w-full rounded-lg" />
                <div
                        className="absolute inset-x-[20%] space-y-4 bottom-7 hidden py-5 text-center text-purple-600 md:block">
                        <h3 className="text-4xl font-medium mb-4">Elevate Your Corporate Events with Expert Planning and Execution!</h3>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/Ry92pFL/banner4.jpg" className="w-full rounded-lg" />
                <div
                        className="absolute inset-x-[20%] space-y-4 bottom-7 hidden py-5 text-center text-purple-600 md:block">
                        <h3 className="text-4xl font-medium mb-4">Elevate Your Corporate Events with Expert Planning and Execution!</h3>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/CJBhWw3/banner-img.jpg" className="w-full rounded-lg" />
                <div
                        className="absolute inset-x-[20%] space-y-4 bottom-7 hidden py-5 text-center text-red-500 md:block">
                        <h3 className="text-4xl font-medium mb-4">Elevate Your Corporate Events with Expert Planning and Execution!</h3>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full rounded-lg">
                <img src="https://i.ibb.co/PGDmWvv/banner3.jpg" className="w-full rounded-lg" />
                <div
                        className="absolute inset-x-[20%] space-y-4 bottom-7 hidden py-5 text-center text-orange-400 md:block">
                        <h3 className="text-4xl font-medium mb-4">Elevate Your Corporate Events with Expert Planning and Execution!</h3>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;