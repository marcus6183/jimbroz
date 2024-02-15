import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../utils/Reveal";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    return (
        <Reveal delay={0}>
            <div
                ref={ref}
                className="w-full h-screen md:h-fit pt-20 relative overflow-hidden flex justify-center items-center"
            >
                <img
                    src="./gigachad.png"
                    alt="gigachad-photo"
                    className="w-[36rem] hidden -ml-8 md:block"
                    style={{
                        maskImage: "linear-gradient(#000 70%, transparent)",
                    }}
                />
                <motion.div style={{ y: textY }} className="relative">
                    <p className="font-fugazOne text-6xl md:text-8xl z-10">
                        LEVEL
                        <span className="text-purple-500 inline-block">
                            UP!
                        </span>
                    </p>
                    <p className="font-fugazOne text-2xl md:text-4xl text-neutral-500">
                        YOUR WORKOUT ROUTINE WITH US!
                    </p>
                </motion.div>
            </div>
        </Reveal>
    );
};

export default Hero;
