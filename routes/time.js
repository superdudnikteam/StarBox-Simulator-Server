var router = require('express').Router();
var { getDateTime, logger } = require('../helpers.js');

router.get('/', function(req, res) {
    res.send(getDateTime());
    logger('info', 'Packet time have been requested')
});

module.exports = router;