export const AUTH_CONFIG = {
  domain: 'jmillie.auth0.com',
  clientId: process.env.REACT_APP_AUTH_CLIENT,
  callbackUrl: 'https://js-fcc-pin.herokuapp.com/callback',
  apiUrl: 'https://jmillie.auth0.com/api/v2/',
  apiIdentifier: process.env.REACT_APP_AUTH_ID,
}
