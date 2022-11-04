const routes = require('express').Router({ mergeParams: true });
const record = require('../../../controllers/avatar/record');

console.log("teste rot")
routes.post('/', record);

module.exports = routes;