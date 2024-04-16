'use client';

import React, { useEffect, useState } from 'react';

export type SearchProps = {
  handleGetSearch: (value: string) => void;
};

export const Search = ({ handleGetSearch }: SearchProps) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    handleGetSearch(search);
  }, [search]);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearch('');
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      role="search"
      className="max-w-md mx-auto"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-black dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-offset-blue-200 focus:border-blue-500 dark:bg-neutral-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar medicamento"
          required
          onChange={({ target }) => setSearch(target.value)}
          value={search}
        />
      </div>
    </form>
  );
};
