'use client';

import React, { useEffect, useState } from 'react';
import { Search } from '@/components/Search';
import ProductTable from '@/components/ProductTable';
import { ApiResponse, getAllMedicines } from '@/utils/api';
import { Pagination } from '@/components/Pagination';

export const BularioConteiner = () => {
  const medicinesPerPage = 10;

  const [medicines, setAllMedicines] = useState<ApiResponse['data']>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<
    ApiResponse['data']
  >([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const request = async () => {
      const response = await getAllMedicines();

      if (response) {
        setAllMedicines(response);
      }
    };

    request();
  }, []);

  useEffect(() => {
    const filtered = medicines.filter((medicine) => {
      return (
        medicine.name.toLowerCase().includes(search.toLowerCase()) ||
        medicine.company.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredMedicines(filtered);
  }, [medicines, search]);

  const handleGetSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const indexOfLastMedicine = currentPage * medicinesPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  const currentMedicines = filteredMedicines.slice(
    indexOfFirstMedicine,
    indexOfLastMedicine
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="h-5/6 flex flex-col">
      <Search handleGetSearch={handleGetSearch} />
      <ProductTable medicines={currentMedicines} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredMedicines.length / medicinesPerPage)}
        onPageChange={handlePageChange}
      />
    </section>
  );
};
