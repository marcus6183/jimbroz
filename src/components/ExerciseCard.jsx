import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Reveal from "../utils/Reveal";

const ExerciseCard = ({ item }) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
        <Reveal delay={0.1}>
            <Link to={`/exercises/${item.id}`}>
                <div className="w-72 h-fit bg-white rounded-lg flex flex-col p-4 border-2 border-white shadow-[0px_5px_10px_0px_#00000024] hover:border-purple-500 duration-200 ease-in-out hover:cursor-pointer">
                    <img src="/testing/testingGIF.gif" alt="image" />
                    <div className="min-h-[0.5px] w-full bg-gradient-to-r from-transparent from-1% via-neutral-500 to-transparent to-99%" />
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
        </Reveal>
    );
};

export default ExerciseCard;
