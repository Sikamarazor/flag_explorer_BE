// Sample mock data with the new structure
const mockCountries = [
  {
    name: 'South Africa',
    flag: '🇿🇦',
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
  }
];

export const mockCountryDetails = [{
  name: 'South Africa',
  population: 60000000,
  capital: 'pretoria',
  flag: '🇿🇦',
}, {
  name: 'Canada',
  population: 23000000,
  capital: 'Ottawa',
  flag: '🇨🇦',
}];

/**
 * 
 * Gets all countries
 */
export async function fetchAllCountries() {
  // Return a simplified list of countries with only name and flag
  return mockCountries;
}

/**
 * 
 * @param {string} name - The common name of the country
 * Gets a country by name
 */
export async function fetchCountryDetails(name) {
  // Find the country by its common name dynamically
  return mockCountryDetails.find(
    country => country.name.toLowerCase() === name.toLowerCase()
  ) || null;
}
