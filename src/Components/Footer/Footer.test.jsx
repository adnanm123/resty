import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

test('renders Footer with the correct content', () => {
  const { getByText } = render(<Footer />);

  const footerElement = getByText(/© 2023/i);
  expect(footerElement).toBeInTheDocument();
});
