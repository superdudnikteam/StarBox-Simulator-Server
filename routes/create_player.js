var router = require('express').Router();
var { randomInteger } = require('../helpers.js');

router.post('/', function(req, res) {
    res.send(String(randomInteger(1,2147483647)));
    logger('info', 'Packet create_player have been requested')
});

module.exports = router;