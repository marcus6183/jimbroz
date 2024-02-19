// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";

const ExerciseVideos = ({ exerciseVideos }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    return (
        <div className="w-full h-fit mt-8">
            <p className=" text-black font-bold text-2xl md:text-3xl relative inline-block text-center">
                <span>Videos</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
            </p>
            <Swiper
                slidesPerView={windowWidth < 768 ? 1 : 2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="py-3"
            >
                {exerciseVideos?.slice(0, 3).map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <a
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="w-72 h-fit bg-white rounded-lg flex flex-col p-4 border-2 border-white shadow-[0px_5px_10px_0px_#00000024] hover:border-purple-500 duration-200 ease-in-out hover:cursor-pointer">
                                <img
                                    src={item.video.thumbnails[0].url}
                                    alt={item.video.title}
                                    className="rounded-md"
                                />
                                <div className="min-h-[1px] w-full my-1 bg-gradient-to-r from-transparent from-1% via-neutral-500 to-transparent to-99%" />
                                {item.video.title.length > 18 ? (
                                    <Marquee
                                        className="w-full overflow-hidden relative"
                                        pauseOnHover="true"
                                        speed={30}
                                        gradient={true}
                                        gradientWidth={20}
                                    >
                                        <p className="font-bold text-xl py-2 whitespace-nowrap px-6">
                                            {item.video.title}
                                        </p>
                                    </Marquee>
                                ) : (
                                    <div className="w-full overflow-hidden relative">
                                        <p className="font-bold text-xl py-2">
                                            {item.video.title}
                                        </p>
                                    </div>
                                )}
                                <p className="text-neutral-600">
                                    {item.video.channelName}
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ExerciseVideos;
