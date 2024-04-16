import { render, screen } from '@testing-library/react';
import React from 'react';
import { PageNumberButtons } from '.';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('<PageNumberButtons />', () => {
  it('should render 3 pages', () => {
    let currentPage = 1;
    const totalPages = 3;
    const handlePageMock = vi.fn((value) => (currentPage = value));

    render(
      <PageNumberButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={handlePageMock}
      />
    );

    expect(screen.getAllByRole('button').length).toBe(totalPages);
  });

  it('should be clicked on one of the pagination buttons', async () => {
    let currentPage = 1;
    const totalPages = 3;
    const handlePageMock = vi.fn((value) => (currentPage = value));

    render(
      <PageNumberButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={handlePageMock}
      />
    );

    await userEvent.click(screen.getAllByRole('button')[2]);

    expect(handlePageMock).toHaveBeenCalled();
    expect(currentPage).toBe(3);
  });
});
