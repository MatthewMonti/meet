import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import for the 'toBeInTheDocument' matcher
import App from '../App';

describe('<App /> component', () => {
  test('renders list of events', () => {
    const { container } = render(<App />);
    
    console.log(container.innerHTML); // This will help see what is actually being rendered

    expect(container.querySelector('#event-list')).toBeInTheDocument();
  });
});