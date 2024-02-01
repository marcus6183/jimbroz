import { motion, useInView, useAnimation, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
    const [scope, animate] = useAnimate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            const handleAnimate = async () => {
                await animate("#gigachad", { y: 0 }, { duration: 2 });
            };

            handleAnimate();
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            className="w-full h-screen md:h-fit pt-20 flex flex-col justify-center items-center px-4 md:px-2 border-b-4 border-black"
        >
            <div
                ref={scope}
                className="w-full h-fit bg-slate-200 flex items-center justify-center relative"
            >
                <div>
                    <img
                        id="gigachad"
                        src="./gigachad.png"
                        alt="gigachad-photo"
                        className="w-[36rem] hidden -ml-8 md:block"
                    />
                </div>
                <div>
                    <p
                        id="text_01"
                        className="font-fugazOne text-8xl text-purple-500"
                    >
                        LEVEL UP!
                    </p>
                    <p id="text_02" className="font-fugazOne text-4xl">
                        YOUR WORKOUT ROUTINE WITH US!
                    </p>
                </div>
                <span className="w-20 h-20 rounded-full bg-slate-200 border-4 border-black absolute -bottom-10 flex items-center justify-center">
                    <IoIosArrowDown />
                </span>
            </div>
        </div>
    );
};

export default Hero;
