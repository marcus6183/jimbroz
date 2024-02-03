import React from "react";

const Welcome = () => {
    return (
        <div className="w-full h-fit flex flex-col items-center sm:items-start py-20 lg:px-12 xl:px-28">
            <div className="w-fit">
                <p className="font-fugazOne text-black text-5xl relative inline-block">
                    <span>WELCOME</span>
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-500"></span>
                </p>
            </div>
            <p className="text-neutral-500 text-xl text-justify mt-4">
                Welcome to{" "}
                <span className="font-bold text-purple-500">JIMBROZ</span>, your
                ultimate destination for personalized fitness! Whether you're a
                seasoned gym enthusiast or just starting your fitness journey,
                we've got you covered. Our innovative workout search feature
                empowers you to tailor your fitness routine to meet your
                specific goals and preferences.
            </p>
        </div>
    );
};

export default Welcome;
