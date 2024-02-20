import SwiperComponent from "./SwiperComponent";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = ({ similarExercises }) => {
    return (
        <div className="w-full h-fit mt-8">
            <p className=" text-black font-bold text-2xl md:text-3xl relative inline-block text-center">
                <span>Similar Exercises</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
            </p>
            <SwiperComponent component={ExerciseCard} data={similarExercises} />
        </div>
    );
};

export default SimilarExercises;
