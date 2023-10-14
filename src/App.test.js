import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm'

test('renders learn react link', () => {
  render(<BookingForm />);
  // expect(screen.getByRole('heading', {name: 'Book a Table'})).toBeInTheDocument();
  const element = screen.getByRole('something');
  expect(element).toBeInTheDocument();
});
