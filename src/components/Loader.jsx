import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="flex flex-col gap-2 w-fit h-fit">
            <motion.p
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    duration: 2.2,
                    delay: 0.3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="font-fugazOne font-bold text-black text-3xl"
            >
                LOADING
            </motion.p>
            <div className="flex gap-3 justify-center">
                <motion.div
                    animate={{
                        y: [0, -15, 2, 0],
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                        // ease: "easeOut",
                    }}
                    className="w-4 h-4 rounded-full bg-purple-500"
                />
                <motion.div
                    animate={{ y: [0, -15, 2, 0] }}
                    transition={{
                        duration: 0.7,
                        delay: 0.6,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                        // ease: "easeOut",
                    }}
                    className="w-4 h-4 rounded-full bg-purple-500"
                />
                <motion.div
                    animate={{ y: [0, -15, 2, 0] }}
                    transition={{
                        duration: 0.7,
                        delay: 0.9,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                        // ease: "easeOut",
                    }}
                    className="w-4 h-4 rounded-full bg-purple-500"
                />
            </div>
        </div>
    );
};

export default Loader;
