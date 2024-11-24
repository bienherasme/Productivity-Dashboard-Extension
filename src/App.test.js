import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./components/ToDoWidget', () => () => <div>Mock ToDoWidget</div>);
jest.mock('./components/WeatherWidget', () => () => <div>Mock WeatherWidget</div>);
jest.mock('./components/NotesWidget', () => () => <div>Mock NotesWidget</div>);

test('renders dashboard components', () => {
  render(<App />);
  const titleElement = screen.getByTestId("extensionTitle");
  const contentElement = screen.getByTestId("extensionContent");
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
