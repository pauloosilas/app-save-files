const avatar = require('./avatar');
const router = require('express').Router();

console.log("teste api")
router.use('/avatar', avatar);

module.exports = router;