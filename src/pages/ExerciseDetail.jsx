import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { initExercises, searchExercisesByPart } from "../redux/exerciseSlice";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { fetchData, youtubeOptions, exerciseOptions } from "../utils/FetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";
import Reveal from "../utils/Reveal";

let didInit = false;

const ExerciseDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [currentExercise, setCurrentExercise] = useState(null);
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [similarExercises, setSimilarExercises] = useState([]);
    const { exerciseList } = useSelector((state) => state.exercise);
    const dispatch = useDispatch();

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    useEffect(() => {
        const resetStates = () => {
            setExerciseVideos([]);
            setSimilarExercises([]);
            setLoading(true);
        };

        const loadDetails = async () => {
            // Check if exerciseList is empty
            if (!didInit && exerciseList.length === 0) {
                didInit = true;
                console.log("FETCHING EXERCISES DATA - ExerciseDetail.jsx");
                const dataExercises = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises?limit=1350",
                    exerciseOptions
                );
                dispatch(initExercises({ data: dataExercises }));
                dispatch(searchExercisesByPart({ bodyPart: "All" }));
            }
            if (exerciseList && exerciseList.length > 0) {
                const res = exerciseList.filter(
                    (exercise) => exercise.id === id
                );
                const resExercise = res[0];
                setCurrentExercise(res.length > 0 ? res[0] : null);

                // YOUTUBE VIDEOS
                const youtubeSearchUrl =
                    "https://youtube-search-and-download.p.rapidapi.com";
                const dataYT = await fetchData(
                    `${youtubeSearchUrl}/search?query=${resExercise.name}`,
                    youtubeOptions
                );
                setExerciseVideos(dataYT.contents);

                // SIMILAR EXERCISES
                const tempList = exerciseList.filter(
                    (exercise) =>
                        exercise.target === resExercise.target &&
                        exercise.id !== id
                );
                setSimilarExercises(tempList.slice(0, 6));

                // UPDATE LOADING STATE
                setLoading(false);
            }
        };

        resetStates();
        loadDetails();
    }, [id, exerciseList]);

    return (
        <div className="w-full min-h-screen px-8 mt-16">
            {loading ? (
                <div className="flex justify-center py-8">
                    <Loader />
                </div>
            ) : (
                <div className="max-w-3xl h-fit py-8 px-6 mx-auto flex flex-col">
                    <Reveal>
                        <div className="flex flex-col md:flex-row">
                            <img
                                src={currentExercise.gifUrl}
                                alt="image"
                                className="w-auto rounded-lg shadow-[0px_5px_10px_0px_#00000024]"
                            />
                            <div className="mt-8 py-0 md:mt-0 md:py-2 px-0 md:px-6 flex-grow flex flex-col">
                                <p className="font-bold text-3xl md:text-4xl">
                                    {capitalizeWords(currentExercise.name)}
                                </p>
                                <div className="w-fit mt-3 flex gap-2 flex-wrap justify-between">
                                    <p className="px-3 bg-purple-500 text-white rounded-xl grid place-content-center">
                                        {currentExercise.bodyPart}
                                    </p>
                                    <p className="px-3 bg-neutral-600 text-white rounded-xl grid place-content-center">
                                        {currentExercise.target}
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <p className="font-bold text-xl">
                                        Equipment
                                    </p>
                                    <div className="w-fit flex items-center justify-center gap-1">
                                        <TbArrowBadgeRightFilled
                                            size={25}
                                            className="text-purple-500"
                                        />
                                        <p className="text-neutral-600">
                                            {capitalizeWords(
                                                currentExercise.equipment
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="font-bold text-xl">
                                        Secondary Muscles
                                    </p>
                                    {currentExercise.secondaryMuscles.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="w-fit flex items-center justify-center gap-1"
                                            >
                                                <TbArrowBadgeRightFilled
                                                    size={25}
                                                    className="text-purple-500"
                                                />
                                                <p className="text-neutral-600">
                                                    {capitalizeWords(item)}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="w-full h-fit mt-8">
                            <p className=" text-black font-bold text-2xl md:text-3xl relative inline-block text-center">
                                <span>Instructions</span>
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
                            </p>
                            <div className="flex flex-col gap-3 px-2 mt-3">
                                {currentExercise.instructions.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 items-center"
                                        >
                                            <div className="w-8 h-8 rounded-full border-2 border-purple-500  flex flex-shrink-0 items-center justify-center relative shadow-[0px_5px_10px_0px_#00000024]">
                                                <p className="text-black font-bold">
                                                    {index + 1}
                                                </p>
                                                <span className="absolute w-3 h-[2px] -right-3 bg-purple-500" />
                                            </div>
                                            <p className="text-neutral-600 shadow-[0px_5px_10px_0px_#00000024] rounded-lg bg-white flex-grow p-2">
                                                {item}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <ExerciseVideos exerciseVideos={exerciseVideos} />
                    </Reveal>
                    <Reveal>
                        <SimilarExercises similarExercises={similarExercises} />
                    </Reveal>
                </div>
            )}
        </div>
    );
};

export default ExerciseDetail;
