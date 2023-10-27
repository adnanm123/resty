import { render, screen, within } from '@testing-library/react';
import History from '../History';

describe('History Component', () => {

  const mockItems = [
    { method: 'GET', url: 'https://example.com' },
    { method: 'POST', url: 'https://test.com' },
  ];

  it('renders History header correctly', () => {
    render(<History items={[]} />);
    expect(screen.getByText('History')).toBeInTheDocument();
  });

  it('renders History items correctly', () => {
    render(<History items={mockItems} />);
    
    // Use the within function to search within specific elements
    mockItems.forEach(item => {
      const listItem = screen.getByText(new RegExp(item.url, 'i')).closest('li');
      const methodElement = within(listItem).getByText(item.method);
      expect(methodElement).toBeInTheDocument();
      expect(listItem).toContainHTML(item.url);
    });
  });

  // ... any other tests ...

});
