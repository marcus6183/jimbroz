import React from "react";
import { useMedia } from "react-use";
import { motion } from "framer-motion";
import {
    IoPersonOutline,
    IoStopwatchOutline,
    IoBrushOutline,
} from "react-icons/io5";
import { BsSliders } from "react-icons/bs";
import Reveal from "../utils/Reveal";

const WhyChooseUs = () => {
    const items = [
        {
            x: -10,
            y: -10,
            radius: "sm:rounded-tl-xl",
            title: "Personalized Fitness",
            icon: (
                <IoPersonOutline size={60} className="text-purple-500 mb-2" />
            ),
        },
        {
            x: 10,
            y: -10,
            radius: "sm:rounded-tr-xl",
            title: "Efficient Search",
            icon: (
                <IoStopwatchOutline
                    size={60}
                    className="text-purple-500 mb-2"
                />
            ),
        },
        {
            x: -10,
            y: 10,
            radius: "sm:rounded-bl-xl",
            title: "Expert-Designed Workouts",
            icon: <IoBrushOutline size={60} className="text-purple-500 mb-2" />,
        },
        {
            x: 10,
            y: 10,
            radius: "sm:rounded-br-xl",
            title: "Diverse Options",
            icon: <BsSliders size={60} className="text-purple-500 mb-2" />,
        },
    ];
    return (
        <Reveal>
            <div className="max-w-6xl mx-auto pb-20">
                <div className="w-full flex justify-center mb-8">
                    <p className="font-fugazOne text-black text-3xl md:text-5xl relative inline-block text-center">
                        <span>WHY CHOOSE US?</span>
                        <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-500"></span>
                    </p>
                </div>
                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <Block key={index} item={item} />
                    ))}
                </div>
            </div>
        </Reveal>
    );
};

export default WhyChooseUs;

const Block = ({ item }) => {
    const isScreenSmOrLarger = useMedia("(min-width: 640px)");
    const { x, y, radius, title, icon } = item;
    return (
        <motion.div
            whileHover={isScreenSmOrLarger ? { x: x, y: y } : {}}
            className={`h-auto px-12 py-12 flex flex-col items-center justify-center shadow-[0px_5px_10px_0px_#00000024] bg-white border-4 rounded-xl sm:rounded-none ${radius} border-white hover:border-purple-500 transition-colors duration-200`}
        >
            {icon}
            <p className="text-neutral-500 font-bold max-w-36 text-center">
                {title}
            </p>
        </motion.div>
    );
};
