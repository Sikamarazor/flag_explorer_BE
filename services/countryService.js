import { Country } from '../models/countryModel.js';

const mockCountries = [
    {
      name: 'South Africa',
      population: 60000000,
      capital: 'Pretoria',
      flag: '🇿🇦'
    },
    {
      name: 'Canada',
      population: 38000000,
      capital: 'Ottawa',
      flag: '🇨🇦'
    }
  ];
  
  export async function fetchAllCountries() {
    return mockCountries.map(({ name, flag }) => ({ name, flag }));
  }
  
  export async function fetchCountryDetails(name) {
    return mockCountries.find(c => c.name.toLowerCase() === name.toLowerCase());
  }
  