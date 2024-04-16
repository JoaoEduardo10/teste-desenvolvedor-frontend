import { ApiResponse } from '@/utils/api';
import { showDate } from '@/utils/showDate';
import React, { useEffect, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { LuArrowDownUp } from 'react-icons/lu';

export interface ProductTableProps {
  medicines: ApiResponse['data'];
}

const ProductTable = ({ medicines }: ProductTableProps) => {
  const [filteredMedicines, setFilteredMedicines] =
    useState<ApiResponse['data']>(medicines);
  const [signal, setSignal] = useState(false);

  useEffect(() => {
    setFilteredMedicines(showDate(medicines, signal));
  }, [medicines]);

  const handleOrderDate = () => {
    setSignal(!signal);
  };

  return (
    <div className="h-full overflow-x-auto shadow-md sm:rounded-lg  mt-7">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome do medicamento
            </th>
            <th
              aria-label="taggle show date"
              onClick={handleOrderDate}
              scope="col"
              className="px-6 py-3 flex items-center gap-1 cursor-pointer"
            >
              <div>
                <LuArrowDownUp className="text-xl" />
              </div>
              <span>data</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Download
            </th>
          </tr>
        </thead>
        <tbody className="relative">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine) => (
              <tr
                aria-label="medicines"
                key={medicine.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  aria-label="medicine name"
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {medicine.name}
                </th>
                <td aria-label="medicine data" className="px-6 py-4">
                  {new Date(medicine.published_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  <FaFileDownload className="text-cente block w-8/12 text-2xl text-red-600" />
                </td>
              </tr>
            ))
          ) : (
            <tr
              className="absolute bg-slate-400 p-3  w-full "
              aria-label="not medicines"
            >
              <td className="flex justify-center text-white">
                medicamento não encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
