import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const BookingConfirmation = ({ booking }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-serif mb-4">Reservation Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for choosing our restaurant. We're looking forward to serving you!
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-semibold mb-3">Reservation Details</h3>
        <div className="space-y-2 text-gray-600">
          <p><span className="font-medium">Date:</span> {booking?.date}</p>
          <p><span className="font-medium">Time:</span> {booking?.time}</p>
          <p><span className="font-medium">Guests:</span> {booking?.guests}</p>
          {booking?.occasion && (
            <p><span className="font-medium">Occasion:</span> {booking?.occasion}</p>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <Link
          to="/menu"
          className="block w-full text-center btn-primary"
        >
          View Menu
        </Link>
        <Link
          to="/"
          className="block w-full text-center text-gray-600 hover:text-gray-800"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;