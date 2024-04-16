import React from 'react';

export type PageNumberButtonsProps = {
  totalPages: number;
  currentPage: number;
  onPageClick: (pageNumber: number) => void;
};

export const PageNumberButtons = ({
  totalPages,
  currentPage,
  onPageClick,
}: PageNumberButtonsProps) => {
  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => (
        <li key={i + 1} onClick={() => onPageClick(i + 1)}>
          <button
            aria-label="paginate button"
            role="button"
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 ${
              currentPage === i + 1
                ? 'bg-gray-100 text-gray-700'
                : 'hover:bg-gray-100 hover:text-gray-700'
            } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </>
  );
};
