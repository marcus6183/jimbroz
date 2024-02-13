import Reveal from "../utils/Reveal";

const Welcome = () => {
    return (
        <div className="max-w-6xl mx-auto h-fit flex flex-col py-20">
            <Reveal>
                <div className="w-full flex justify-center sm:justify-start mb-8">
                    <p className="font-fugazOne text-black text-3xl md:text-5xl relative inline-block">
                        <span>WELCOME</span>
                        <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-500"></span>
                    </p>
                </div>
            </Reveal>
            <Reveal>
                <p className="w-full sm:w-fit text-neutral-500 text-xl text-justify">
                    Welcome to{" "}
                    <span className="font-bold text-purple-500">JIMBROZ</span>,
                    your ultimate destination for personalized fitness! Whether
                    you're a seasoned gym enthusiast or just starting your
                    fitness journey, we've got you covered. Our innovative
                    workout search feature empowers you to tailor your fitness
                    routine to meet your specific goals and preferences.
                </p>
            </Reveal>
        </div>
    );
};

export default Welcome;
