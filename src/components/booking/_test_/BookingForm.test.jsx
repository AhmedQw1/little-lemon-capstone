import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import BookingForm from '../BookingForm';

const renderBookingForm = () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
};

describe('BookingForm', () => {
  beforeEach(() => {
    // Reset mock date to 2025-08-17
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-08-17'));
  });

  afterEach(() => {
    vi.useRealTimers();
    // Cleanup after each test
    document.body.innerHTML = '';
  });

  test('renders all form fields', () => {
    renderBookingForm();
    
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion (Optional)')).toBeInTheDocument();
  });

  test('displays validation errors for empty required fields', async () => {
    renderBookingForm();
    
    const submitButton = screen.getByRole('button', { name: /make reservation/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(screen.getByText(/number of guests is required/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('accepts valid form submission', async () => {
    renderBookingForm();
    
    // Fill in form with valid data
    const dateInput = screen.getByLabelText('Date');
    const timeSelect = screen.getByLabelText('Time');
    const guestsInput = screen.getByLabelText('Number of Guests');
    const occasionSelect = screen.getByLabelText('Occasion (Optional)');
    
    fireEvent.change(dateInput, {
      target: { value: '2025-08-20' }
    });
    
    fireEvent.change(timeSelect, {
      target: { value: '18:00' }
    });
    
    fireEvent.change(guestsInput, {
      target: { value: '4' }
    });
    
    fireEvent.change(occasionSelect, {
      target: { value: 'birthday' }
    });
    
    const submitButton = screen.getByRole('button', { name: /make reservation/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('prevents past dates selection', () => {
    renderBookingForm();
    
    const dateInput = screen.getByLabelText('Date');
    expect(dateInput.min).toBe('2025-08-17');
  });

  test('limits guest number between 1 and 10', () => {
  renderBookingForm();
  // Use regex to match label text, ignoring extra elements
  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  expect(guestsInput.min).toBe('1');
  expect(guestsInput.max).toBe('10');
  });
});