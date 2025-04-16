// Country Model for the backend in ES Modules
export const Country = {
    name: {
      common: String,
      official: String,
      nativeName: Object,
    },
    tld: [String],
    cca2: String,
    ccn3: String,
    cca3: String,
    cioc: String,
    independent: Boolean,
    status: String,
    unMember: Boolean,
    currencies: Object, // Record<string, Currency>
    idd: {
      root: String,
      suffixes: [String],
    },
    capital: [String],
    altSpellings: [String],
    region: String,
    subregion: String,
    languages: Object, // Record<string, string>
    translations: Object, // Record<string, Translation>
    latlng: [Number],
    landlocked: Boolean,
    borders: [String],
    area: Number,
    demonyms: Object, // Record<string, Demonym>
    flag: String,
    maps: {
      googleMaps: String,
      openStreetMaps: String,
    },
    population: Number,
    gini: Object, // Record<string, number>
    fifa: String,
    car: {
      signs: [String],
      side: String,
    },
    timezones: [String],
    continents: [String],
    flags: {
      png: String,
      svg: String,
      alt: String,
    },
    coatOfArms: {
      png: String,
      svg: String,
    },
    startOfWeek: String,
    capitalInfo: {
      latlng: [Number],
    },
    postalCode: {
      format: String,
      regex: String,
    },
  };
  