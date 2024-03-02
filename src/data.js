import { useEffect } from 'react';
import axios from 'axios';
import defaultValues from '../defaultData.json'; // Import default values from data.json

export function fetchData(setFormValues) {
  useEffect(() => {
    // Try to fetch default values from API, fall back to data.json if unsuccessful
    axios.get('http://localhost:3004/defaults')
      .then((res) => {
        setFormValues({
          ...res.data.defaults,
          hypothesized_mean: 0,
          perform_hypothesis_test: false
        });
      })
      .catch((err) => {
        console.error(err);
        setFormValues({
          ...defaultValues,
          hypothesized_mean: 0,
          perform_hypothesis_test: false
        });
      });
  }, []);
}

export default defaultValues;
