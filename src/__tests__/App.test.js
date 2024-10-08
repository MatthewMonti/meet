// src/__tests__/App.test.js
import { render } from '@testing-library/react';
import { act } from 'react';  // import act from 'react' instead of 'react-dom/test-utils'
import App from '../App';
describe('<App /> component', () => {
    test('renders list of events', () => {
        const AppDOM = render(<App />).container.firstChild;
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });
});