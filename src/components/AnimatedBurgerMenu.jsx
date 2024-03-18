import { motion, MotionConfig } from "framer-motion";

const AnimatedBurgerMenu = ({ showNav, setShowNav }) => {
    return (
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
            <motion.button
                initial={false}
                className="w-6 h-12 relative"
                animate={showNav ? "open" : "closed"}
                onClick={() => setShowNav(!showNav)}
            >
                <motion.span
                    variants={{
                        open: {
                            top: ["30%", "50%", "50%"],
                            rotate: ["0deg", "0deg", "45deg"],
                        },
                        closed: {
                            top: ["50%", "50%", "30%"],
                            rotate: ["45deg", "0deg", "0deg"],
                        },
                    }}
                    style={{
                        top: "30%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    className="absolute w-6 h-1 bg-black rounded-lg"
                />
                <motion.span
                    variants={{
                        open: {
                            opacity: [1, 0, 0],
                        },
                        closed: {
                            opacity: [0, 0, 1],
                        },
                    }}
                    style={{
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    className="absolute w-6 h-1 bg-black rounded-lg"
                />
                <motion.span
                    variants={{
                        open: {
                            bottom: ["30%", "50%", "50%"],
                            rotate: ["0deg", "0deg", "-45deg"],
                        },
                        closed: {
                            bottom: ["50%", "50%", "30%"],
                            rotate: ["-45deg", "0deg", "0deg"],
                        },
                    }}
                    style={{
                        bottom: "30%",
                        left: "50%",
                        x: "-50%",
                        y: "50%",
                    }}
                    className="absolute w-6 h-1 bg-black rounded-lg"
                />
            </motion.button>
        </MotionConfig>
    );
};

export default AnimatedBurgerMenu;
