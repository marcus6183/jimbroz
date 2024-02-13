import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../utils/Reveal";

const ExploreNow = () => {
    return (
        <Reveal>
            <div className="max-w-6xl mx-auto pb-20">
                <div className="w-full flex flex-col items-center justify-center">
                    <p className="font-fugazOne text-black text-3xl md:text-5xl relative inline-block text-center mb-8">
                        <span>EXPLORE NOW</span>
                        <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-500"></span>
                    </p>
                    <p className="max-w-xl sm:w-fit text-neutral-500 text-xl text-justify">
                        Embark on a fitness journey that's as unique as you are.
                        Join{" "}
                        <span className="font-bold text-purple-500">
                            JIMBROZ
                        </span>{" "}
                        and revolutionize the way you work out. Begin searching
                        for your ideal workout now and take the first step
                        towards a healthier, stronger you!
                    </p>
                    <motion.div
                        className="w-fit px-6 py-3 mt-8 rounded-md flex items-center cursor-pointer bg-purple-500 text-white"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <Link to="/exercises">Explore Exercises</Link>
                    </motion.div>
                </div>
            </div>
        </Reveal>
    );
};

export default ExploreNow;
