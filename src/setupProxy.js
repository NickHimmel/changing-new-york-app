const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const token = process.env.REACT_APP_NYPL_API_KEY;
  console.log(token)
  app.use(proxy('/api', { target: 'http://api.repo.nypl.org/',  auth: token }));
};
