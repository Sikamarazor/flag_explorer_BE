import * as countryService from '../services/countryService.js';

/**
 * Controller function to handle GET /countries
 * Responds with a list of countries (name and flag)
 */
export async function getAllCountries(req, res) {
  try {
    // Fetch all countries using the service
    const countries = await countryService.fetchAllCountries();
    // Send the countries back with a 200 OK status
    res.status(200).json(countries);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
}

/**
 * Controller function to handle GET /countries/:name
 * Responds with detailed information about a specific country
 */
export async function getCountryByName(req, res) {
  try {
    // Fetch country details based on the name parameter in the route
    const country = await countryService.fetchCountryDetails(req.params.name);

    // If the country is not found, return 404 Not Found
    if (!country) {
      return res.status(404).json({ error: 'Country not found' });
    }

    // Send the found country data with a 200 OK status
    res.status(200).json(country);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json({ error: 'Failed to fetch country details' });
  }
}
