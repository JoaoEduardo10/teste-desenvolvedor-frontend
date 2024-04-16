import React from 'react';

import Link from 'next/link';

import { ApiResponse } from '@/utils/api';

import { FaFileDownload } from 'react-icons/fa';

export type TBodyProps = {
  medicines: ApiResponse['data'];
};

export const TBody = ({ medicines }: TBodyProps) => {
  return (
    <tbody className="relative">
      {medicines.length > 0 ? (
        medicines.map((medicine) => (
          <tr
            aria-label="medicines"
            key={medicine.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              aria-label="medicine name"
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white phone:text-xs"
            >
              {medicine.name}
            </th>
            <td aria-label="medicine data" className="px-6 py-4 phone:hidden">
              {new Date(medicine.published_at).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 cursor-pointer phone:hidden ">
              <Link
                href={medicine.documents[0].url}
                rel="external"
                target="_blank"
              >
                <FaFileDownload className="text-cente block w-8/12 text-2xl text-red-600" />
              </Link>
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
  );
};
