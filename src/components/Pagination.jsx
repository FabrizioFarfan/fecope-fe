import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react"; 

export const Pagination = ({ onPageChange, currentPage, data, pageSize }) => {
  const totalPages = Math.ceil(data / pageSize);
  // console.log(totalPages);
  const renderPaginationLinks = () => {
    const a = currentPage * pageSize + 1;
    const b =
      currentPage !== totalPages - 1 ? (currentPage + 1) * pageSize : data;
    const c = a === b ? a : a + "-" + b;
    return (
      <>
        <h1 className="text-dark-red text-sm font-extralight mb-2 text-opacity-65">
          {data === 0 ? "0" : c} de {data}
        </h1>
      </>
    );
  };
  const diasbleRightArrow = currentPage === totalPages - 1 || data === 0;
  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li className="inline-block py-1 px-3  hover:border-[#eee]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <ChevronLeft
            className={`h-10 w-10 text-true-red text-opacity-80 ${
              currentPage === 0 ? "text-opacity-30" : "text-opacity-80"
            }`}
          ></ChevronLeft>
        </button>
      </li>
      <div className="flex gap-1">{renderPaginationLinks()}</div>
      <li className="inline-block py-1 px-3  hover:border-[#eee]">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={diasbleRightArrow}
        >
          <ChevronRight
            className={`h-10 w-10 text-true-red text-opacity-70 ${
              diasbleRightArrow ? "text-opacity-30" : "text-opacity-80"
            }`}
          ></ChevronRight>
        </button>
      </li>
    </ul>
  );
};
