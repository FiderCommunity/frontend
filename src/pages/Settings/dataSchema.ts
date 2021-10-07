import * as Yup from 'yup';

export const { ValidationError } = Yup;

export const createProjectSchema = Yup.object().shape({
  name: Yup.string().required('Fill the field').min(5, 'Min 5 characters'),
  url: Yup.string().required('Fill the field'),
  logo_url: Yup.string().required('Fill the field'),
  description: Yup.string().min(6, 'Min 10 characters'),
});
