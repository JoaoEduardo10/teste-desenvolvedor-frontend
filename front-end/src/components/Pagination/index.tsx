import React from 'react';
import { PageNumberButtons } from './PageNumberButtons';

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <nav
      aria-label="Page navigation example"
      className="mt-3 flex justify-center"
    >
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            aria-label="Previous"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Anterior
          </button>
        </li>
        <PageNumberButtons
          currentPage={currentPage}
          onPageClick={handlePageClick}
          totalPages={totalPages}
        />
        <li>
          <button
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Proximo
          </button>
        </li>
      </ul>
    </nav>
  );
};
