import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Pagination } from '.';
import userEvent from '@testing-library/user-event';

describe('<Pagination />', () => {
  it('should click on the previous button', async () => {
    let currentPage = 2;
    const totalPages = 5;
    const handlePageMock = vi.fn((value) => (currentPage = value));

    render(
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageMock}
        totalPages={totalPages}
      />
    );

    await userEvent.click(screen.getByLabelText('Previous'));

    expect(currentPage).toBe(1);
  });

  it('should click on the next button', async () => {
    let currentPage = 2;
    const totalPages = 5;
    const handlePageMock = vi.fn((value) => (currentPage = value));

    render(
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageMock}
        totalPages={totalPages}
      />
    );

    await userEvent.click(screen.getByLabelText('Next'));

    expect(currentPage).toBe(3);

    await userEvent.click(screen.getAllByRole('button')[2]);

    expect(1);
  });
});
