import { fetchAllCountries, fetchCountryDetails } from '../../services/countryService.js';

test('should return all countries with name and flag', () => {
  const result = fetchAllCountries();
  expect(result.length).toBeGreaterThan(0);
  expect(result[0]).toHaveProperty('name');
  expect(result[0]).toHaveProperty('flag');
});

test('should return country details by name', () => {
  const result = fetchCountryDetails('Canada');
  expect(result).toHaveProperty('name', 'Canada');
  expect(result).toHaveProperty('capital', 'Ottawa');
});
