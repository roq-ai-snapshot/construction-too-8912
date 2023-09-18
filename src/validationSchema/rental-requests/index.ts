import * as yup from 'yup';

export const rentalRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  tool_id: yup.string().nullable(),
  guest_id: yup.string().nullable(),
});
