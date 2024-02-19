// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = ({ similarExercises }) => {
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
                <span>Similar Exercises</span>
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
                {similarExercises.map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <ExerciseCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SimilarExercises;
