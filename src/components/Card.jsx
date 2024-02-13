import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Reveal from "../utils/Reveal";

const Card = ({ feature }) => {
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
        <div className={`w-full flex ${feature.flex}`}>
            <motion.div
                className="bg-white min-h-48 p-4 hidden sm:flex rounded-lg shadow-[0px_5px_10px_0px_#00000024]"
                initial={{
                    x: windowWidth >= 1225 ? feature.offsetX : 0,
                    y: windowWidth >= 1225 ? 0 : 75,
                    opacity: 0,
                }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            >
                {feature.flex === "justify-start" ? (
                    <Title title={feature.title} icon={feature.icon} />
                ) : (
                    <Description description={feature.description} />
                )}

                <div className="min-w-[0.5px] h-full bg-gradient-to-b from-transparent from-5% via-neutral-500 to-transparent to-95%" />
                {feature.flex === "justify-start" ? (
                    <Description description={feature.description} />
                ) : (
                    <Title title={feature.title} icon={feature.icon} />
                )}
            </motion.div>
            <Reveal>
                <div className="bg-white h-fit py-6 px-4 flex flex-col sm:hidden rounded-lg shadow-[0px_5px_10px_0px_#00000024]">
                    <Title title={feature.title} icon={feature.icon} />
                    <div className="min-h-[0.5px] w-full bg-gradient-to-r from-transparent from-5% via-neutral-500 to-transparent to-95% my-4" />
                    <Description description={feature.description} />
                </div>
            </Reveal>
        </div>
    );
};

export default Card;

const Title = ({ title, icon }) => {
    return (
        <div className="min-w-40 bg-white flex flex-col items-center justify-center px-4">
            {icon}
            <p className="text-center max-w-40 font-bold">{title}</p>
        </div>
    );
};

const Description = ({ description }) => {
    return (
        <div className="max-w-2xl bg-white grid place-items-center px-4">
            <p className="text-justify text-neutral-500">{description}</p>
        </div>
    );
};
