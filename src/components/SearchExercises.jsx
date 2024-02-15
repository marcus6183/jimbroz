import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchExercises } from "../redux/exerciseSlice";
import { IoSearch } from "react-icons/io5";
import BodyPartButton from "./BodyPartButton";

const SearchExercises = () => {
    const bodyParts = [
        "All",
        "Back",
        "Cardio",
        "Chest",
        "Lower arms",
        "Lower legs",
        "Neck",
        "Shoulders",
        "Upper arms",
        "Upper legs",
        "Waist",
    ];
    const [searchKey, setSearchKey] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (searchKey != "") {
            dispatch(searchExercises({ searchKey: searchKey }));
        }
    };

    return (
        <div className="max-w-6xl flex flex-col items-center">
            <div className="w-full flex justify-center my-8">
                <p className="font-fugazOne text-black text-3xl md:text-5xl relative inline-block text-center">
                    <span>SEARCH EXERCISES</span>
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-purple-500"></span>
                </p>
            </div>
            <div className="relative">
                <input
                    type="text"
                    name="searchInput"
                    value={searchKey}
                    className="px-4 py-2 pr-10 w-[20rem] md:w-[30rem] rounded-lg border-[2px] outline-none border-neutral-500 focus:border-purple-500 duration-200 shadow-[0px_5px_10px_0px_#00000024]"
                    placeholder="Search..."
                    onChange={(e) => setSearchKey(e.target.value)}
                    onFocus={(e) => e.currentTarget.select()}
                    onKeyDown={(e) => {
                        e.key === "Enter" ? handleSearch() : "";
                    }}
                />
                <button
                    onClick={handleSearch}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-purple-500 duration-200"
                >
                    <IoSearch className="h-5 w-5" />
                </button>
            </div>
            <div className="w-[20rem] md:w-[30rem] flex justify-center flex-wrap gap-2 my-8">
                {bodyParts.map((item, index) => (
                    <BodyPartButton
                        key={index}
                        item={item}
                        setSearchKey={setSearchKey}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchExercises;
