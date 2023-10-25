import { render, screen } from '@testing-library/react';
import Results from '../Results';

describe('<Results />', () => {
  it('renders "Loading..." when props.loading is true', () => {
    render(<Results loading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders JSON data when props.data is provided', () => {
    const testData = {
      key1: 'value1',
      key2: 'value2'
    };

    render(<Results data={testData} />);

    // For ReactJson, it may render the keys and values as separate text nodes.
    expect(screen.getByText(/key1/)).toBeInTheDocument();
    expect(screen.getByText(/value1/)).toBeInTheDocument();
    expect(screen.getByText(/key2/)).toBeInTheDocument();
    expect(screen.getByText(/value2/)).toBeInTheDocument();
  });

  it('does not render JSON data when props.data is not provided', () => {
    render(<Results data={null} />);
    
    // The assertion is a little trickier here because we want to make sure no JSON data is rendered.
    // Using queryByText will not throw an error if the element isn't found, it just returns null.
    expect(screen.queryByText(/key1/)).not.toBeInTheDocument();
    expect(screen.queryByText(/value1/)).not.toBeInTheDocument();
    expect(screen.queryByText(/key2/)).not.toBeInTheDocument();
    expect(screen.queryByText(/value2/)).not.toBeInTheDocument();
  });
});
