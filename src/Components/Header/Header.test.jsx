import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('<Header />', () => {
  test('renders the header with the correct title', () => {
    const { getByText } = render(<Header />);

    expect(getByText("RESTy")).toBeInTheDocument();
  });
});
