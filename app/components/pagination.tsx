"use client";

import { useState } from "react";

export default function Pagination({
  totalPosts,
  currentPage,
  postsPerPage,
  onPageChange,
}: {
  totalPosts: number;
  currentPage: number;
  postsPerPage: number;
  onPageChange: (page: number) => void;
}) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg ${
            currentPage === index + 1
              ? "bg-gray-900 text-white shadow-md shadow-gray-900/10"
              : "text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
          } transition-all font-sans text-xs font-medium uppercase disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {index + 1}
          </span>
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
