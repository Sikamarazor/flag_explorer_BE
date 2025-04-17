import Joi from 'joi';

export const CountrySchema = Joi.object({
  name: Joi.string().required(),
  flag: Joi.string().required(),
});

export const CountryDetailsSchema = Joi.object({
  name: Joi.string().required(),
  population: Joi.number().integer().required(),
  capital: Joi.string().required(),
  flag: Joi.string().required(),
});
