import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperComponent = ({ component: Component, data }) => {
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
        <Swiper
            slidesPerView={windowWidth < 768 ? 1 : 2}
            style={{
                "--swiper-pagination-color": "#a855f7",
            }}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="py-3"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                    <Component item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;
