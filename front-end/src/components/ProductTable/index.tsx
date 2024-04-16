import React, { useEffect, useState } from 'react';

import { ApiResponse } from '@/utils/api';
import { showDate } from '@/utils/showDate';

import { THead } from './Thead';
import { TBody } from './Tbody';

export interface ProductTableProps {
  medicines: ApiResponse['data'];
}

const ProductTable = ({ medicines }: ProductTableProps) => {
  const [filteredMedicines, setFilteredMedicines] =
    useState<ApiResponse['data']>(medicines);
  const [signal, setSignal] = useState(false);

  useEffect(() => {
    setFilteredMedicines(showDate(medicines, signal));
  }, [medicines, signal]);

  const handleOrderDate = () => {
    setSignal(!signal);
  };

  return (
    <div className="h-full overflow-x-auto shadow-md sm:rounded-lg  mt-7">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <THead handleOrderDate={handleOrderDate} />
        <TBody medicines={filteredMedicines} />
      </table>
    </div>
  );
};

export default ProductTable;
