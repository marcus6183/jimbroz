import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import WhyChooseUs from "../components/WhyChooseUs";
import Features from "../components/Features";
import ExploreNow from "../components/ExploreNow";

const Home = () => {
    return (
        <div className="w-full min-h-screen px-8 flex flex-col items-center">
            <Hero />
            <Welcome />
            <Features />
            <WhyChooseUs />
            <ExploreNow />
        </div>
    );
};

export default Home;
