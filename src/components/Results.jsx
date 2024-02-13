import ExerciseCard from "./ExerciseCard";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import {
    IoChevronBack,
    IoChevronForward,
    IoEllipsisHorizontal,
} from "react-icons/io5";

const Results = ({ itemsPerPage }) => {
    const { exerciseListCurrent } = useSelector((state) => state.exercise);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (exerciseListCurrent.length !== 0) {
            setTotalPages(Math.ceil(exerciseListCurrent.length / itemsPerPage));
            setCurrentPage(0);
        }
    }, [exerciseListCurrent]);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = exerciseListCurrent.slice(startIndex, endIndex);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex gap-2 items-center justify-between bg-white shadow-[0px_5px_10px_0px_#00000024] rounded-lg p-4 flex-col md:flex-row">
                <p className="font-bold text-xl">
                    <span className="text-purple-500">
                        {exerciseListCurrent.length}
                    </span>{" "}
                    Workouts Found
                </p>
                <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                        <div className="w-6 h-2 bg-purple-500 rounded-lg" />
                        <p>Body Part</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="w-6 h-2 bg-neutral-600 rounded-lg" />
                        <p>Target Muscle</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {currentItems &&
                    currentItems.map((item, index) => (
                        <ExerciseCard key={index} item={item} />
                    ))}
            </div>
            <div className="flex items-center justify-center my-10 text-xl">
                {exerciseListCurrent.length !== 0 && (
                    <ReactPaginate
                        breakLabel={<IoEllipsisHorizontal />}
                        nextLabel={<IoChevronForward />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={0}
                        pageCount={totalPages}
                        forcePage={currentPage}
                        previousLabel={<IoChevronBack />}
                        renderOnZeroPageCount={null}
                        className="flex paginator rounded-md overflow-hidden bg-white shadow-[0px_5px_10px_0px_#00000024]"
                        pageClassName="group/page hover:bg-slate-200 duration-200"
                        pageLinkClassName="w-10 h-10 flex items-center justify-center group-hover/page"
                        breakClassName="group/break hover:bg-slate-200 duration-200"
                        breakLinkClassName="w-10 h-10 flex items-center justify-center group-hover/break"
                        nextClassName="group/next hover:bg-slate-200 duration-200"
                        nextLinkClassName="w-10 h-10 flex items-center justify-center group-hover/next"
                        previousClassName="group/previous hover:bg-slate-200 duration-200"
                        previousLinkClassName="w-10 h-10 flex items-center justify-center group-hover/previous"
                        disabledClassName="text-slate-300 pointer-events-none"
                        activeClassName="bg-purple-500 text-white hover:bg-purple-600 duration-200"
                    />
                )}
            </div>
        </div>
    );
};

export default Results;
