import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
    const [currentExercise, setCurrentExercise] = useState(null);
    const { exerciseList } = useSelector((state) => state.exercise);
    const { id } = useParams();

    useEffect(() => {
        const res = exerciseList.filter((exercise) => exercise.id === id);
        setCurrentExercise(res.length > 0 ? res[0] : null);
    }, [id, exerciseList]);

    return (
        <div className="mt-20 min-h-screen w-full">
            {currentExercise && (
                // TODO: Complete Exercise Detail page
                <p>{currentExercise.name}</p>
            )}
        </div>
    );
};

export default ExerciseDetail;
