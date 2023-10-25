import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../Form';

describe('<Form />', () => {
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Form handleApiCall={() => {}} />);

    expect(getByText("URL:")).toBeInTheDocument();
    expect(getByText("GO!")).toBeInTheDocument();
    expect(getByText("GET")).toHaveClass("active");
    expect(getByText("POST")).not.toHaveClass("active");
    expect(getByText("PUT")).not.toHaveClass("active");
    expect(getByText("DELETE")).not.toHaveClass("active");
  });

  test('updates method and textarea visibility on method click', () => {
    const { getByText, queryByPlaceholderText } = render(<Form handleApiCall={() => {}} />);

    fireEvent.click(getByText("POST"));
    expect(getByText("POST")).toHaveClass("active");
    expect(queryByPlaceholderText("Enter JSON data here")).toBeInTheDocument();

    fireEvent.click(getByText("GET"));
    expect(getByText("GET")).toHaveClass("active");
    expect(queryByPlaceholderText("Enter JSON data here")).not.toBeInTheDocument();
  });
});
