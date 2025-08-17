import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateBooking } from '../../utils/validation';

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    const { isValid, errors } = await validateBooking(formData);
    
    if (!isValid) {
      setErrors(errors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/booking-confirmation', { 
        state: { 
          booking: {
            ...formData,
            // Format the date for display
            date: new Date(formData.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            // Convert 24h time to 12h format
            time: new Date(`2000/01/01 ${formData.time}`).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
            })
          }
        } 
      });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto" aria-label="Reservation Form">
      <div className="mb-4" role="group" aria-labelledby="date-label">
        <label id="date-label" htmlFor="date" className="block text-gray-700 mb-2">
          Date <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          required
          aria-required="true"
          aria-invalid={errors.date ? "true" : "false"}
          aria-describedby={errors.date ? "date-error" : undefined}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
            ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.date && (
          <p id="date-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.date}
          </p>
        )}
      </div>

      <div className="mb-4" role="group" aria-labelledby="time-label">
        <label id="time-label" htmlFor="time" className="block text-gray-700 mb-2">
          Time <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.time ? "true" : "false"}
          aria-describedby={errors.time ? "time-error" : undefined}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
            ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select a time</option>
          <option value="17:00">5:00 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </select>
        {errors.time && (
          <p id="time-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.time}
          </p>
        )}
      </div>

      <div className="mb-4" role="group" aria-labelledby="guests-label">
        <label id="guests-label" htmlFor="guests" className="block text-gray-700 mb-2">
          Number of Guests <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
          aria-required="true"
          aria-invalid={errors.guests ? "true" : "false"}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
            ${errors.guests ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.guests && (
          <p id="guests-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.guests}
          </p>
        )}
      </div>

      <div className="mb-6" role="group" aria-labelledby="occasion-label">
        <label id="occasion-label" htmlFor="occasion" className="block text-gray-700 mb-2">
          Occasion (Optional)
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          aria-invalid={errors.occasion ? "true" : "false"}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
            ${errors.occasion ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date">Date Night</option>
          <option value="business">Business Meal</option>
          <option value="other">Other</option>
        </select>
        {errors.occasion && (
          <p id="occasion-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.occasion}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        aria-busy={isSubmitting}
        className={`w-full btn-primary relative ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <>
            <span className="sr-only">Submitting reservation...</span>
            <span className="opacity-0">Make Reservation</span>
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </>
        ) : (
          'Make Reservation'
        )}
      </button>
    </form>
  );
};

export default BookingForm;