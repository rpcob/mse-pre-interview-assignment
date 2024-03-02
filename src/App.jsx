import React from 'react';
import useForm from './useForm';

function App() {
  const {
    formValues,
    errors,
    submitEnabled,
    submittedValues,
    handleChange,
    handleCheck,
    handleSubmit,
    handleReset
  } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sample Size:
        <input
          type="number"
          name="sample_size"
          value={formValues.sample_size}
          onChange={handleChange}
        />
        {errors.sample_size && <p>{errors.sample_size}</p>}
      </label>
      <label>
        Sample Mean:
        <input
          type="number"
          name="sample_mean"
          value={formValues.sample_mean}
          onChange={handleChange}
        />
      </label>
      <label>
        Standard Deviation:
        <input
          type="number"
          name="standard_deviation"
          value={formValues.standard_deviation}
          onChange={handleChange}
        />
        {errors.standard_deviation && <p>{errors.standard_deviation}</p>}
      </label>
      <label>
        Perform Hypothesis Test:
        <input
          type="checkbox"
          name="perform_hypothesis_test"
          checked={formValues.perform_hypothesis_test}
          onChange={handleCheck}
        />
      </label>
      <label>
        Hypothesized Mean:
        <input
          type="number"
          name="hypothesized_mean"
          value={formValues.hypothesized_mean}
          onChange={handleChange}
          disabled={!formValues.perform_hypothesis_test}
        />
        {errors.hypothesized_mean && <p>{errors.hypothesized_mean}</p>}
      </label>
      <button type="submit" disabled={!submitEnabled}>
        OK
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {submittedValues && (
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          {Object.entries(submittedValues).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.toString()}</td>
            </tr>
          ))}
        </table>
      )}
    </form>
  );
}

export default App;
