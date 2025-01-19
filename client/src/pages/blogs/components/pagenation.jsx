import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <div className="flex justify-center items-center mt-6">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-white bg-purple-600 rounded hover:bg-purple-700 disabled:opacity-50"
            >
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    className={`px-4 py-2 mx-1 rounded ${
                        currentPage === index + 1
                            ? 'bg-purple-700 text-white'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-white bg-purple-600 rounded hover:bg-purple-700 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;