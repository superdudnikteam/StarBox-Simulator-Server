var router = require('express').Router();
const { logger } = require('../helpers');

router.get('/', function(req, res) {
    res.send("1.7.0");
    logger('info', 'Packet get_version have been requested')
});

module.exports = router;