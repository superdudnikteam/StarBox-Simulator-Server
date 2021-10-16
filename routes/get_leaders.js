var router = require('express').Router();
var { randomInteger, logger } = require('../helpers.js');

router.post('/', function(req, res) {
  let Leaders = ["nosebs", "Superdudnikteam", "TG: @nosebs", "Made by Superdudnikteam"];
  let LeadersObj = {"Leaders": [], LocalValue: null};
  for(i in Leaders) {
   LeadersObj.Leaders.push({Player: { ID: randomInteger(0,1000), Name: `${Leaders[i]}`, AvatarID: i, ColorID: i, BrawlPass: 1}, Value: 99999});
  }
  res.json(LeadersObj)
  logger('info', 'Packet get_leaders have been requested')
});

module.exports = router;