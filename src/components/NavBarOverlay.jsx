import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimate, usePresence } from "framer-motion";

const NavBarOverlay = ({ menuItems, setShowNav }) => {
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = () => {
                animate(
                    "#circleBg",
                    { scale: 80, opacity: [0, 1, 1] },
                    { duration: 0.7, ease: "linear", times: [0, 0.2, 1] }
                );
                animate("ul", { opacity: 1 }, { delay: 0.3 });
            };
            enterAnimation();
        } else {
            const exitAnimation = async () => {
                animate("ul", { opacity: 0 });
                await animate(
                    "#circleBg",
                    { scale: 0, opacity: [1, 1, 0] },
                    {
                        duration: 0.7,
                        delay: 0.1,
                        ease: "linear",
                        times: [0, 0.8, 1],
                    }
                );
                safeToRemove();
            };
            exitAnimation();
        }
    }, [isPresent]);
    return (
        <div
            ref={scope}
            className="absolute w-screen h-screen top-0 left-0 md:hidden"
        >
            <div className="relative w-full h-full grid place-content-center">
                <div
                    id="circleBg"
                    className="absolute w-10 h-10 -top-5 -right-5 rounded-full bg-white border-4 border-purple-500 scale-0 z-20"
                />
                <ul className="opacity-0 flex flex-col gap-6 items-center z-30">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                onClick={() => setShowNav(false)}
                            >
                                <p className="px-4 text-3xl hover:text-purple-500 duration-200">
                                    {item.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBarOverlay;
