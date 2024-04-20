"use client";

import { useState } from "react";

export default function Pagination({
  totalPosts,
  onPageChange,
}: {
  totalPosts: number;
  onPageChange: (page: number) => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`${
            i === currentPage
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-900"
          } py-2 px-4 rounded`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        onClick={() => handleClick(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="bg-gray-200 text-gray-900 py-2 px-4 rounded"
      >
        Previous
      </button>
      {renderPaginationButtons()}
      <button
        onClick={() => handleClick(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="bg-gray-200 text-gray-900 py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
}
