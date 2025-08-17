import React from 'react'
import BookingForm from '../components/booking/BookingForm'

const Reservations = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-serif mb-6">Make a Reservation</h1>
      <BookingForm />
    </div>
  )
}

export default Reservations