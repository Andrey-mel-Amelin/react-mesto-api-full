const CAST_ERROR = 'CastError';
const REGEX_URL = /https?:\/\/(www\.)?[-a-zA-Z0-9:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/;
const VALIDATION_ERROR = 'Validation failed';
const allowedCors = [
  'https://amelin.mesto.nomoredomains.icu',
  'http://amelin.mesto.nomoredomains.icu',
  'http://localhost:3000',
];

module.exports = {
  CAST_ERROR,
  REGEX_URL,
  VALIDATION_ERROR,
  allowedCors,
};
