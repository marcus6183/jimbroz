import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import WhyChooseUs from "../components/WhyChooseUs";
import Features from "../components/Features";

const Home = () => {
    return (
        <div className="w-full min-h-screen px-4">
            <Hero />
            <Welcome />
            <Features />
            {/* <WhyChooseUs /> */}
        </div>
    );
};

export default Home;
