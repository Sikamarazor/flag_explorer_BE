import * as countryService from '../services/countryService.js';
import { CountrySchema, CountryDetailsSchema } from '../schemas/countrySchema.js';

/**
 * Controller to handle GET /countries
 * Fetches a list of countries and validates each using the Country schema
 */
export async function getAllCountries(req, res) {
  try {
    // Call the service to fetch all countries (returns basic info)
    const countries = await countryService.fetchAllCountries();

    // Validate each country using the Country schema
    const validated = countries.map(country => {
      const { error, value } = CountrySchema.validate(country);

      // If validation fails, throw an error to be caught below
      if (error) throw new Error(`Invalid country data: ${error.message}`);

      return value; // return the validated country
    });

    // If all is valid, return the validated array
    res.status(200).json(validated);
  } catch (err) {
    // Handle internal errors or validation issues
    res.status(500).json({ error: err.message || 'Failed to fetch countries' });
  }
}

/**
 * Controller to handle GET /countries/:name
 * Fetches a specific country by name and validates it using the CountryDetails schema
 */
export async function getCountryByName(req, res) {
  try {
    // Fetch detailed info for the country by name
    const country = await countryService.fetchCountryDetails(req.params.name);

    // If not found, respond with 404
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }

    // Validate the detailed country object
    const { error, value } = CountryDetailsSchema.validate(country);

    // If validation fails, respond with 400 Bad Request
    if (error) {
      return res.status(400).json({ error: `Invalid country details: ${error.message}` });
    }

    // Return the validated country details
    res.status(200).json(value);
  } catch (err) {
    // Catch and return any internal errors
    res.status(500).json({ error: err.message || 'Failed to fetch country details' });
  }
}