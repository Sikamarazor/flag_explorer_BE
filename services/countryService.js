import { Country, CountryDetails } from '../models/countryModel.js';

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

const mockCountryDetails = {
  name: 'South Africa',
  population: 60000000,
  capital: 'Pretoria',
  flag: '🇿🇦',
};

export async function fetchAllCountries() {
  // Return a simplified list of countries with only name and flag
  return mockCountries;
}

export async function fetchCountryDetails(name) {
    // Find the country by its common name dynamically
    const country = mockCountries.find(c => c.name.toLowerCase() === name.toLowerCase());
    
    // If country is found, return its details
    if (country) {
      // Simulate country details (you can expand this logic to return the actual details)
      return {
        name: country.name,
        population: 60000000,  // Replace with actual population if available
        capital: 'Pretoria',   // Replace with actual capital if available
        flag: country.flag
      };
    }
  
    return null;  // Return null if the country is not found
  }
  