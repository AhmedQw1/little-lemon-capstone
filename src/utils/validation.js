import * as Yup from 'yup';

export const bookingValidationSchema = Yup.object().shape({
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date cannot be in the past'),
  time: Yup.string()
    .required('Time is required')
    .test('is-available', 'Selected time slot is not available', (value) => {
      // Simple time validation - could be expanded to check against API
      if (!value) return false;
      const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
      return availableTimes.includes(value);
    }),
  guests: Yup.number()
    .required('Number of guests is required')
    .min(1, 'Must have at least 1 guest')
    .max(10, 'Maximum 10 guests allowed')
    .integer('Number of guests must be a whole number'),
  occasion: Yup.string()
    .optional()
});

export const validateBooking = async (values) => {
  try {
    await bookingValidationSchema.validate(values, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (err) {
    const errors = err.inner.reduce((acc, error) => {
      acc[error.path] = error.message;
      return acc;
    }, {});
    return { isValid: false, errors };
  }
};