import SwiperComponent from "./SwiperComponent";
import VideoCard from "./VideoCard";

const ExerciseVideos = ({ exerciseVideos }) => {
    const slicedExerciseVideos = exerciseVideos
        .slice(0, 3)
        .map((item) => item.video);
    return (
        <div className="w-full h-fit mt-8">
            <p className=" text-black font-bold text-2xl md:text-3xl relative inline-block text-center">
                <span>Videos</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
            </p>
            <SwiperComponent
                component={VideoCard}
                data={slicedExerciseVideos}
            />
        </div>
    );
};

export default ExerciseVideos;
