import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
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
        <div className="w-full h-16 fixed flex justify-between items-center px-8 bg-white bg-clip-padding backdrop-blur-sm bg-opacity-50 z-20">
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
                className="md:hidden z-20"
                onClick={() => setShowNav(!showNav)}
            >
                {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {showNav && (
                <ul className="flex flex-col gap-6 items-center justify-center absolute w-full h-screen top-0 left-0 bg-slate-100 md:hidden">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                onClick={() => setShowNav(!showNav)}
                            >
                                <p className="px-4 text-3xl">{item.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
