var router = require('express').Router();
var { randomInteger, logger, range } = require('../helpers.js');

router.post('/', function(req, res) {
  let brawlers = [];
  for(i in range(51)) {
   brawlers.push({"ID": i, "LevelIndex": 9})
  }
  let player = {
   "Statistics":[
      {
         "Name":"earned_coins",
         "Value":"99999"
      },
      {
         "Name":"earned_gems",
         "Value":"99999"
      },
      {
         "Name":"trophies",
         "Value":"99999"
      },
      {
         "Name":"xp",
         "Value":"2147483647"
      },
      {
         "Name":"boxes",
         "Value":"99999"
      },
      {
         "Name":"big_boxes",
         "Value":"99999"
      },
      {
         "Name":"giant_boxes",
         "Value":"99999"
      },
      {
         "Name":"play_time",
         "Value":"2147483647"
      },
      {
         "Name":"new_games",
         "Value":"99999"
      },
      {
         "Name":"skins",
         "Value":"99999"
      }
   ],
   "Brawlers": brawlers
}
  res.json(player);
  logger('info', 'Packet get_profile have been requested')
});

module.exports = router;