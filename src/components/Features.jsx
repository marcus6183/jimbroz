import Card from "./Card";
import {
    IoExtensionPuzzleOutline,
    IoSearchOutline,
    IoInfiniteOutline,
} from "react-icons/io5";
import Reveal from "../utils/Reveal";

const Features = () => {
    const features = [
        {
            title: "Tailored Just for You",
            icon: (
                <IoExtensionPuzzleOutline
                    size={60}
                    className="text-purple-500 mb-2"
                />
            ),
            description:
                "At JIMBROZ, we understand that one size does not fit all when it comes to fitness. That's why we've created a powerful workout search engine that lets you find the perfect exercise routines based on your needs. Whether you're targeting specific muscle groups, focusing on cardio, or looking for a full-body workout, we have a diverse range of options to suit every fitness level.",
            flex: "justify-end",
            offsetX: 500,
        },
        {
            title: "Search by Keyword or Muscle Groups",
            icon: (
                <IoSearchOutline size={60} className="text-purple-500 mb-2" />
            ),
            description:
                "Want to target your abs, build stronger legs, or enhance your cardiovascular endurance? Our easy-to-use search function allows you to filter workouts based on keywords or muscle groups, ensuring that you find the exercises that align with your fitness goals. Simply type in your preferences, and let us guide you to a tailored workout plan.",
            flex: "justify-start",
            offsetX: -500,
        },
        {
            title: "Endless Variety, Endless Possibilities",
            icon: (
                <IoInfiniteOutline size={60} className="text-purple-500 mb-2" />
            ),
            description:
                "Ditch the monotony and explore our extensive library of workouts designed by fitness experts. From high-intensity interval training (HIIT) to strength training and flexibility exercises, we offer a wide array of options to keep your workouts exciting and effective. Break through plateaus and keep your fitness journey fresh with new routines regularly added to our database.",
            flex: "justify-end",
            offsetX: 500,
        },
    ];
    return (
        <div className="max-w-6xl mx-auto pb-20">
            <Reveal>
                <div className="w-full flex justify-center sm:justify-end mb-8">
                    <p className="font-fugazOne text-black text-5xl relative inline-block">
                        <span>FEATURES</span>
                        <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-500"></span>
                    </p>
                </div>
            </Reveal>
            <div className="w-full flex flex-wrap gap-8">
                {features.map((feature, index) => (
                    <Card key={index} feature={feature} className="flex-1" />
                ))}
            </div>
        </div>
    );
};

export default Features;
