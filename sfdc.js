var nforce = require('nforce');

module.exports = nforce.createConnection({
  clientId: process.env.SALESFORCE_OAUTH_CLIENT_ID,
  clientSecret: process.env.SALESFORCE_OAUTH_CLIENT_SECRET,
  redirectUri: (process.env.ROOT_URI || 'http://localhost:3000') + '/oauth/_callback'
});

