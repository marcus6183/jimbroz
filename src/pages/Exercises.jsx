import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initExercises, searchExercisesByPart } from "../redux/exerciseSlice";
import SearchExercises from "../components/SearchExercises";
import Results from "../components/Results";
import Loader from "../components/Loader";
import { fetchData, exerciseOptions } from "../utils/FetchData";

let didInit = false;

const Exercises = () => {
    const dispatch = useDispatch();
    const { exerciseList } = useSelector((state) => state.exercise);

    useEffect(() => {
        // Initialize Data on first load
        const initData = async () => {
            if (!didInit && exerciseList.length === 0) {
                didInit = true;
                console.log("FETCHING EXERCISES DATA - Exercises.jsx");
                const dataExercises = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises?limit=1350",
                    exerciseOptions
                );
                dispatch(initExercises({ data: dataExercises }));
                dispatch(searchExercisesByPart({ bodyPart: "All" }));
            }
        };
        initData();
    }, []);

    return (
        <div className="w-full min-h-screen px-8 flex flex-col items-center mt-16">
            {exerciseList.length === 0 ? (
                <div className="flex justify-center py-8">
                    <Loader />
                </div>
            ) : (
                <>
                    <SearchExercises />
                    <Results itemsPerPage={20} />
                </>
            )}
        </div>
    );
};

export default Exercises;
