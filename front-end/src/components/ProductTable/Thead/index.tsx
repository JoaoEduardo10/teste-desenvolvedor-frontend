import React from 'react';
import { LuArrowDownUp } from 'react-icons/lu';

export type THeadProps = {
  handleOrderDate: () => void;
};

export const THead = ({ handleOrderDate }: THeadProps) => {
  const handleClickButton = () => {
    handleOrderDate();
  };

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3 phone:text-sm">
          Nome do medicamento
        </th>
        <th
          aria-label="taggle show date"
          onClick={handleClickButton}
          scope="col"
          className="px-6 py-3 flex items-center gap-1 cursor-pointer phone:hidden"
        >
          <div>
            <LuArrowDownUp className="text-xl" />
          </div>
          <span>data</span>
        </th>
        <th scope="col" className="px-6 py-3 phone:hidden">
          Download
        </th>
      </tr>
    </thead>
  );
};
