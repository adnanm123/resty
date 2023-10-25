import { render } from '@testing-library/react';
import Results from '../Results';

describe('<Results />', () => {
  it('renders "Loading..." when props.loading is true', () => {
    const { getByText } = render(<Results loading={true} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the provided data as pretty JSON when props.data is provided', async () => {
    const testData = {
      key1: 'value1',
      key2: 'value2'
    };

    const { findByText } = render(<Results data={testData} />);

    const formattedData = await findByText(/"key1": "value1",\s+"key2": "value2"/);
    expect(formattedData).toBeInTheDocument();
  });
});
