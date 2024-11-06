import { render, within, screen, act } from '@testing-library/react';
import Button from '../components/Button';

describe('<Button /> component', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Button />);  // Don't assign to AppDOM yet
    });
  });

  test('renders Button', async () => {
    const Button= screen.queryByTestId('Details');  
    expect(Button).toBeInTheDocument();
  });

  test('renders event details', async () => {
    const DetailsDOM = screen.queryByTestId('Details');
    const allRenderedEventItems = within(DetailsDOM).queryAllByRole('listitem');   
    expect(allRenderedEventItems.length);
  });

});