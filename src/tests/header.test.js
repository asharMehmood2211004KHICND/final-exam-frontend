import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    const { getByRole } = render(<Header />);
    const img = getByRole('img');
    expect(img).toHaveAttribute('src', 'https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png');
    // expect(img).toHaveAttribute('alt', 'Logo');
  });

  it('applies the correct CSS classes', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('navigation')).toHaveClass('navbar');
    expect(getByRole('img')).toHaveClass('img');
  });
});
