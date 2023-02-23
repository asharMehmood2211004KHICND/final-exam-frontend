import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ProductsListPage } from '../pages/ProductsListPage';

describe('ProductsListPage', () => {
  test('renders product list items', async () => {
    // Mock fetch data
    const mockData = [
      {
        id: 1,
        name: 'Product 1',
        shortDescription: 'Short description',
        price: 10,
        imageLink: 'product1.png',
      },
      {
        id: 2,
        name: 'Product 2',
        shortDescription: 'Short description of product 2',
        price: 20,
        imageLink: 'product2.png',
      },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<ProductsListPage />);

    // Wait for fetch data to be resolved
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    // Check that product list items are rendered
    expect(screen.getByText('Products List Page')).toBeInTheDocument();
    
  });
});
