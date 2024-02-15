import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBarOverlay from "./NavBarOverlay";

const Navbar = () => {
    const menuItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Exercises",
            path: "/exercises",
        },
    ];
    const [showNav, setShowNav] = useState(false);

    return (
        <motion.div
            initial={{ y: -64 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-16 fixed flex justify-between items-center px-8 bg-white bg-clip-padding backdrop-blur-sm bg-opacity-50 z-20"
        >
            <Link to={"/"}>
                <img
                    src="./jimbroz.svg"
                    alt="jimbroz logo"
                    className="w-40 h-16"
                />
            </Link>
            <ul className="hidden md:flex">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <p className="mx-4 text-xl relative group">
                                <span>{item.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-500 transition-all group-hover:w-full"></span>
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                className="md:hidden z-30 cursor-pointer"
                onClick={() => setShowNav(!showNav)}
            >
                {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            <AnimatePresence>
                {showNav && (
                    <NavBarOverlay
                        menuItems={menuItems}
                        setShowNav={setShowNav}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
