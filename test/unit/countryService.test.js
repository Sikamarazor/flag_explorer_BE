import { expect } from 'chai';
import * as countryService from '../../services/countryService.js';

describe('Country Service', () => {
  it('should return all countries with name and flag', async () => {
    const result = await countryService.fetchAllCountries();
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('name');
    expect(result[0]).to.have.property('flag');
  });

  it('should return country details by name', async () => {
    const result = await countryService.fetchCountryDetails('Canada');
    expect(result).to.have.property('name', 'Canada');
    expect(result).to.have.property('capital', 'Ottawa');
  });

  it('should return null if country name does not exist', async () => {
    const result = await countryService.fetchCountryDetails('Jozi'); // non-existent country
    expect(result).to.be.null;
  });
});
