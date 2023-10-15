import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import userEvent from '@testing-library/user-event';

describe("Booking Form component testing", () => {
  it('Heading Roles', () => {
    render(<BookingForm />);
    //expect(screen.getByRole('something')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Book a Table'})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: 'Full Name'})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: 'Email Address'})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: 'Phone Number'})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name: 'Additonal Comments:'})).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', {name: 'Number of guests:'})).toBeInTheDocument();
    expect(screen.getByRole('combobox', {name: 'Choose time:'})).toBeInTheDocument();
    expect(screen.getByRole('combobox', {name: 'Occasion:'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'None'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'Birthday'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'Anniversary'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'Engagement'})).toBeInTheDocument();
    expect(screen.getByRole('option', {name: 'other'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Book Your Table'})).toBeInTheDocument();
  });

  it('Show error if name not filled', async() => {
    render(<BookingForm />)
    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);
  })
})