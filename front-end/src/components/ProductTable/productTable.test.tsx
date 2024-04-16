import React from 'react';
import { act, render, screen } from '@testing-library/react';
import ProductTable from '.';
import { dataMock } from './mock';
import userEvent from '@testing-library/user-event';

describe('<Producttable />', () => {
  it('should render the medicines', () => {
    render(<ProductTable medicines={dataMock} />);

    expect(screen.getAllByLabelText('medicines').length).toBe(23);
    expect(screen.queryByLabelText('not medicines')).not.toBeInTheDocument();
  });

  it('should not render the medicines', () => {
    render(<ProductTable medicines={[]} />);

    expect(screen.getByLabelText('not medicines')).toBeInTheDocument();
  });

  it('should not render the medicines', async () => {
    render(<ProductTable medicines={dataMock} />);

    const buttonShowDate = screen.getByLabelText('taggle show date');

    const medicineName = screen.getAllByLabelText('medicine name');

    expect(medicineName[0]).toHaveTextContent('AMOXICILINA');

    await userEvent.click(buttonShowDate);
  });
});
