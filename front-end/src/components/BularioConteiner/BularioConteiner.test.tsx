import { getAllMedicines } from '@/utils/api';
import React from 'react';
import { vi } from 'vitest';
import { dataMock } from '../ProductTable/mock';
import { act, render, screen } from '@testing-library/react';
import { BularioConteiner } from '.';
import userEvent from '@testing-library/user-event';

describe('<BularioConteiner />', () => {
  const apiMock = vi.mocked(getAllMedicines);

  beforeEach(() => {
    apiMock.mockReturnValue(Promise.resolve(dataMock));
  });

  it('should show me the medicine when searching by name or company', async () => {
    const medicine = 'ACEZO';

    await act(async () => render(<BularioConteiner />));

    expect(screen.getAllByLabelText('medicines').length).toBe(10);

    const input = screen.getByPlaceholderText('Buscar medicamento');

    await userEvent.type(input, medicine);

    expect(screen.getAllByLabelText('medicines').length).toBe(1);
  });

  it('should page the medications', async () => {
    const medicine = 'ACEZO';

    await act(async () => render(<BularioConteiner />));

    expect(screen.getAllByLabelText('medicines').length).toBe(10);

    const paginateButtons = screen.getAllByLabelText('paginate button');

    expect(paginateButtons.length).toBe(3);

    await userEvent.click(paginateButtons[2]);

    expect(screen.getAllByLabelText('medicines').length).toBe(3);
  });
});
