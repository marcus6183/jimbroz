import { useSelector, useDispatch } from "react-redux";
import { searchExercisesByPart } from "../redux/exerciseSlice";

const BodyPartButton = ({ item, setSearchKey }) => {
    const { selectedBodyPart } = useSelector((state) => state.exercise);
    const dispatch = useDispatch();

    const handleBodyPartSearch = () => {
        setSearchKey("");
        if (selectedBodyPart !== item) {
            dispatch(searchExercisesByPart({ bodyPart: item }));
        } else {
            dispatch(searchExercisesByPart({ bodyPart: "All" }));
        }
    };

    const twStyle =
        selectedBodyPart === item
            ? "text-purple-500 border-purple-500"
            : "text-neutral-500 border-white hover:text-purple-500";

    return (
        <div
            className={`px-3 py-1 bg-white shadow-[0px_5px_10px_0px_#00000024] rounded-2xl border-[1px] cursor-pointer duration-200 ${twStyle}`}
            onClick={handleBodyPartSearch}
        >
            <p>{item}</p>
        </div>
    );
};

export default BodyPartButton;
