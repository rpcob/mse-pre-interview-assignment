import { useState } from 'react';
import { fetchData, defaultValues } from './data';

export default function useForm() {
  const [formValues, setFormValues] = useState({
    ...defaultValues,
    hypothesized_mean: 0,
    perform_hypothesis_test: false
  });
  const [errors, setErrors] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null); // State to hold submitted values

  fetchData(setFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setSubmitEnabled(false); // Reset submit enabled on change
  };

  const handleCheck = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.checked,
    });
    setSubmitEnabled(false); // Reset submit enabled on change
  };

  const validateForm = () => {
    let errors = {};

    if (formValues.sample_size < 2) {
      errors.sample_size = 'Sample size must be a whole number >= 2';
    }

    if (formValues.standard_deviation <= 0) {
      errors.standard_deviation = 'Standard deviation must be a numeric value > 0';
    }

    if (formValues.perform_hypothesis_test && !formValues.hypothesized_mean) {
      errors.hypothesized_mean = 'Hypothesized mean is required when performing hypothesis test';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setSubmittedValues(formValues); // Save submitted values
      setErrors({});
      setSubmitEnabled(true);
    }
  };

  const handleReset = () => {
    setFormValues({
      ...defaultValues,
      hypothesized_mean: 0,
      perform_hypothesis_test: false
    });
    setErrors({});
    setSubmitEnabled(false); // Reset submit enabled on reset
  };

  return {
    formValues,
    errors,
    submitEnabled,
    submittedValues,
    handleChange,
    handleCheck,
    handleSubmit,
    handleReset
  };
}
