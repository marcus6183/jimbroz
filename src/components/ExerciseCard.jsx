import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const ExerciseCard = ({ item }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    useEffect(() => {
        setImageLoaded(false);
    }, [item]);

    return (
        <Link to={`/exercises/${item.id}`}>
            <div className="w-72 h-fit bg-white rounded-lg flex flex-col p-4 border-2 border-white shadow-[0px_5px_10px_0px_#00000024] hover:border-purple-500 duration-200 ease-in-out hover:cursor-pointer">
                <div className="w-[252px] h-[252px] relative">
                    <motion.div
                        animate={{
                            backgroundColor: ["#f5f5f5", "#e5e5e5", "#f5f5f5"],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            ease: "easeOut",
                        }}
                        className={`${
                            imageLoaded ? "opacity-0" : "opacity-100"
                        } w-full h-full absolute bg-neutral-200 rounded-lg transition-opacity duration-200`}
                    />
                    <img
                        src={item.gifUrl}
                        alt="image"
                        loading="lazy"
                        onLoad={handleImageLoad}
                    />
                </div>

                <div className="h-[1px] my-1 w-full bg-gradient-to-r from-transparent from-1% via-neutral-500 to-transparent to-99%" />
                {item.name.length > 18 ? (
                    <Marquee
                        className="w-full overflow-hidden relative"
                        pauseOnHover="true"
                        speed={30}
                        gradient={true}
                        gradientWidth={20}
                    >
                        <p className="font-bold text-xl py-2 whitespace-nowrap px-6">
                            {capitalizeFirstLetter(item.name)}
                        </p>
                    </Marquee>
                ) : (
                    <div className="w-full overflow-hidden relative">
                        <p className="font-bold text-xl py-2">
                            {capitalizeFirstLetter(item.name)}
                        </p>
                    </div>
                )}
                <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2 text-sm">
                        <p className="px-3 bg-purple-500 text-white rounded-xl grid place-content-center">
                            {item.bodyPart}
                        </p>
                        <p className="px-3 bg-neutral-600 text-white rounded-xl grid place-content-center">
                            {item.target}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;
