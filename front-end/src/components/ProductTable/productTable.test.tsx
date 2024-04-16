import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductTable from '.';
import { dataMock } from './mock';

describe('<Producttable />', () => {
  it('should render the medicines', () => {
    render(<ProductTable medicines={dataMock} />);

    expect(screen.getAllByLabelText('medicines').length).toBe(2);
    expect(screen.queryByLabelText('not medicines')).not.toBeInTheDocument();
  });

  it('should not render the medicines', () => {
    render(<ProductTable medicines={[]} />);

    expect(screen.getByLabelText('not medicines')).toBeInTheDocument();
  });
});
