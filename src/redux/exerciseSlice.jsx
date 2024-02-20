import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
    name: "exercise",
    initialState: {
        selectedBodyPart: "",
        exerciseList: [],
        exerciseListCurrent: [],
    },
    reducers: {
        initExercises: (state, action) => {
            const { data } = action.payload;
            if (data && state.exerciseList.length === 0) {
                state.exerciseList = data;
                console.log("SUCCESS - Load exercises");
            }
        },
        searchExercises: (state, action) => {
            const { searchKey } = action.payload;
            state.selectedBodyPart = "";
            state.exerciseListCurrent = state.exerciseList.filter(
                (exercise) =>
                    exercise.name
                        .toLowerCase()
                        .includes(searchKey.trim().toLowerCase()) ||
                    exercise.target
                        .toLowerCase()
                        .includes(searchKey.trim().toLowerCase()) ||
                    exercise.equipment
                        .toLowerCase()
                        .includes(searchKey.trim().toLowerCase()) ||
                    exercise.bodyPart
                        .toLowerCase()
                        .includes(searchKey.trim().toLowerCase())
            );
        },
        searchExercisesByPart: (state, action) => {
            const { bodyPart } = action.payload;
            state.selectedBodyPart = bodyPart;
            if (bodyPart !== "All") {
                state.exerciseListCurrent = state.exerciseList.filter(
                    (exercise) =>
                        exercise.bodyPart
                            .toLowerCase()
                            .includes(bodyPart.toLowerCase())
                );
            } else {
                state.exerciseListCurrent = state.exerciseList;
            }
        },
    },
});

export const { initExercises, searchExercises, searchExercisesByPart } =
    exerciseSlice.actions;

export default exerciseSlice.reducer;
