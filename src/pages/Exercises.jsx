import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initExercises, searchExercisesByPart } from "../redux/exerciseSlice";
import SearchExercises from "../components/SearchExercises";
import Results from "../components/Results";

let didInit = false;

const Exercises = () => {
    const dispatch = useDispatch();
    const { exerciseList } = useSelector((state) => state.exercise);

    useEffect(() => {
        // Initialize Data on first load
        if (!didInit && exerciseList.length === 0) {
            didInit = true;
            console.log("Fetching Data");
            fetch("/exercisedbAll.json") // Assuming data.json is in the public folder
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.length);
                    dispatch(initExercises({ data: data }));
                    dispatch(searchExercisesByPart({ bodyPart: "All" }));
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, []);

    return (
        <div className="w-full min-h-screen px-8 flex flex-col items-center mt-16">
            <SearchExercises />
            <Results itemsPerPage={20} />
        </div>
    );
};

export default Exercises;
