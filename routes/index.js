const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const common = require('./util/common');

/**
 * routes
 * @param {express} app
 * @return {express}
 */
function routes(app) {
  router.post('/login', (req, res) => {
    common.makeApiRequest(req, 'POST', '/applicant-auth/login', function(apiData) {
      common.setUserCookies(apiData, res);
    });
  });

  return router;
}

module.exports = routes;
