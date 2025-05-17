"use client";

import React from "react";
//
import Dropdown from "@/components/custom/dropdown";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
//

interface ITableFooterProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (value: number) => void;
  rowsPerPageOptions?: number[];
}

export default function TableFooter({
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  rowsPerPageOptions = [],
}: ITableFooterProps) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumber = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages.map((page, index) => (
      <li
        key={index}
        className={clsx(
          "w-10 h-10 flex justify-center items-center text-sm font-normal text-blue-950  my-auto rounded-xl cursor-pointer",
          {
            "bg-blue-50": page === currentPage,
            "": page !== currentPage,
          }
        )}
        onClick={() => typeof page === "number" && onPageChange(page)}
        aria-current={page === currentPage ? "page" : undefined}
      >
        {page}
      </li>
    ));
  };

  return (
    <div className="w-full flex justify-between items-center mt-5 px-4">
      <div className="flex-1 flex justify-center items-center gap-2">
        <button
          className={clsx(
            "w-10 h-10 flex justify-center items-center text-sm font-normal text-blue-950 my-auto bg-blue-50 rounded-xl cursor-pointer",
            {
              "text-gray-300 cursor-not-allowed": currentPage === 1,
              "text-blue-950 bg-blue-50 hover:bg-blue-100": currentPage > 1,
            }
          )}
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <ul className="mx-2 flex gap-1">{renderPageNumber()}</ul>

        <button
          className={clsx(
            "w-10 h-10 flex justify-center items-center text-sm font-normal text-blue-950 my-auto bg-blue-50 rounded-xl cursor-pointer",
            {
              "text-gray-300 cursor-not-allowed": currentPage === totalPages,
              "text-blue-950 bg-blue-50 hover:bg-blue-100":
                currentPage !== totalPages,
            }
          )}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-zinc-700">Rows per page: </p>
        <Dropdown
          options={rowsPerPageOptions}
          selected={rowsPerPage}
          onChange={(value) => onRowsPerPageChange(value)}
        />
      </div>
    </div>
  );
}
