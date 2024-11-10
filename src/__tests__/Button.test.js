import Button from '../components/Button';
import {render, screen, act, within, fireEvent} from '@testing-library/react';
describe('<Button /> component', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Button event={{ description: 'Test event description.' }}  />);  // Don't assign to AppDOM yet
    });
  });

  test('renders Button', async () => {
    const button= screen.queryByTestId('Details');  
    expect(button).toBeInTheDocument();
  });

  test('renders event details', async () => {
    const DetailsDOM = screen.queryByTestId('Details');
    const allRenderedEventItems = within(DetailsDOM).queryAllByRole('listitem');   
    expect(allRenderedEventItems.length);
  });

  test('button toggles event details visibility and changes text', async () => {
    const eventDescription = 'Test event description.';
    
    // Initially, the event description should not be visible
    expect(screen.queryByText(eventDescription)).toBeNull();
    
    // Button should display "Show Details"
    const button = screen.getByText('Show Details');
    expect(button).toBeInTheDocument();
    
    // Click the button to show the details
    fireEvent.click(button);
    
    // After the click, the event description should appear
    expect(screen.getByText(eventDescription)).toBeInTheDocument();
    
    // The button text should now be "Hide Details"
    expect(screen.getByText('Hide Details')).toBeInTheDocument();
    
    // Click the button to hide the details again
    fireEvent.click(screen.getByText('Hide Details'));
    
    // After clicking, the event description should be hidden again
    expect(screen.queryByText(eventDescription)).toBeNull();
    
    // The button text should revert back to "Show Details"
    expect(screen.getByText('Show Details')).toBeInTheDocument();
  });
  
});