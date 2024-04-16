import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '.';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('<Search />', () => {
  it('should be typed in search', async () => {
    const handleGetSearchMock = vi.fn();

    render(<Search handleGetSearch={handleGetSearchMock} />);

    const input = screen.getByPlaceholderText('Buscar medicamento');

    const search = 'test';

    await userEvent.type(input, search);

    expect(handleGetSearchMock).toHaveBeenCalledWith(search);
  });

  it('should clear the form', async () => {
    const handleGetSearchMock = vi.fn();

    render(<Search handleGetSearch={handleGetSearchMock} />);

    const input = screen.getByPlaceholderText('Buscar medicamento');

    const search = 'test';

    await userEvent.type(input, search);

    fireEvent.submit(screen.getByRole('search'));
  });
});
