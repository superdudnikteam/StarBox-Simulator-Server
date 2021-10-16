const express = require('express');
const app = express();
const fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./key.pem', 'utf8');
var certificate = fs.readFileSync('./cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

app.all('/', (req, res) => {
  res.send('Hello World!')
})

app.all('/bs-bs/', (req, res) => {
  res.send('Hello пидорас!')
})

app.all('/bs-bs/v13/', (req, res) => {
  res.send('посри мимо унитаза')
})

app.get('/bs-bs/get_version.php', (req, res) => {
  res.send('1.7.0')
})

app.post('/bs-bs/v13/create_player.php', (req, res) => {
 //TODO: скрепышарить
  res.send('1337')
})

app.post('/bs-bs/v13/get_leaders.php', (req, res) => {
  /*From prod server: {"Leaders":[{"Player":{"ID":"15263","Name":"MOROZ","AvatarID":"57","ColorID":"9","BrawlPass":"1"},"Value":578951},{"Player":{"ID":"21192","Name":"DIFFEKT","AvatarID":"7","ColorID":"10","BrawlPass":"1"},"Value":519591},{"Player":{"ID":"16935","Name":"SiMpAy","AvatarID":"44","ColorID":"11","BrawlPass":"1"},"Value":469763},{"Player":{"ID":"16858","Name":"SHAMPANOW","AvatarID":"27","ColorID":"1","BrawlPass":"1"},"Value":403981},{"Player":{"ID":"34669","Name":"dhxyrkf","AvatarID":"15","ColorID":"1","BrawlPass":"1"},"Value":393434},{"Player":{"ID":"645","Name":"SPVITALSHARK","AvatarID":"15","ColorID":"1","BrawlPass":"1"},"Value":352849},{"Player":{"ID":"9402","Name":"DimasikTop","AvatarID":"42","ColorID":"10","BrawlPass":"1"},"Value":338602},{"Player":{"ID":"59297","Name":"ICE","AvatarID":"57","ColorID":"9","BrawlPass":"1"},"Value":336451},{"Player":{"ID":"3429","Name":"Error404","AvatarID":"38","ColorID":"4","BrawlPass":"1"},"Value":331921},{"Player":{"ID":"11273","Name":"XDJames","AvatarID":"37","ColorID":"9","BrawlPass":"1"},"Value":310318},{"Player":{"ID":"537","Name":"ARTMIX","AvatarID":"7","ColorID":"1","BrawlPass":"1"},"Value":291919},{"Player":{"ID":"10296","Name":"\u0442\u043e\u043f1","AvatarID":"53","ColorID":"7","BrawlPass":"1"},"Value":285445},{"Player":{"ID":"33117","Name":"YUTUBEproGame","AvatarID":"66","ColorID":"1","BrawlPass":"1"},"Value":274506},{"Player":{"ID":"49173","Name":"Tyoopsik","AvatarID":"66","ColorID":"10","BrawlPass":"1"},"Value":274372},{"Player":{"ID":"45680","Name":"brawler","AvatarID":"42","ColorID":"1","BrawlPass":"1"},"Value":272633},{"Player":{"ID":"67047","Name":"FelipeisGod","AvatarID":"38","ColorID":"11","BrawlPass":"1"},"Value":268872},{"Player":{"ID":"14435","Name":"\u04104","AvatarID":"65","ColorID":"0","BrawlPass":"1"},"Value":254650},{"Player":{"ID":"7728","Name":"jeanrzm","AvatarID":"15","ColorID":"1","BrawlPass":"1"},"Value":244759},{"Player":{"ID":"44140","Name":"SelskiyKot","AvatarID":"51","ColorID":"6","BrawlPass":"1"},"Value":241324},{"Player":{"ID":"7135","Name":"gg","AvatarID":"66","ColorID":"1","BrawlPass":"1"},"Value":237968}],"LocalValue":null}*/
  let Leaders = ["nosebs", "Superdudnikteam", "TG: @nosebs", "Made by Superdudnikteam"];
  let LeadersObj = {"Leaders": [], LocalValue: null};
  for(i in Leaders) {
   LeadersObj.Leaders.push({Player: { ID: 123, Name: `${i}`, AvatarID: 1, ColorID: 1, BrawlPass: 1}, Value: 99999});
  }
  res.json(LeadersObj)
})

app.post('/bs-bs/v13/verify_player.php', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post('/bs-bs/v13/get_profile.php', (req, res) => {
  let player = {"Statistics":[{"Name":"earned_coins","Value":"1337"},{"Name":"earned_gems","Value":"228"},{"Name":"trophies","Value":"12345"},{"Name":"xp","Value":"99999"},{"Name":"boxes","Value":"1234"},{"Name":"big_boxes","Value":"4321"},{"Name":"giant_boxes","Value":"567"},{"Name":"play_time","Value":"999999"},{"Name":"new_games","Value":"1"},{"Name":"skins","Value":"1"}],"Brawlers":[{"ID":49,"LevelIndex":9}]}
  res.json(player);
})

app.all('*', (req, res) => {
  res.status(404).send('Не нашел урл, но посетите: <a href="https://github.com/orgs/Superdudnikteam/">Superdudnikteam</a>:(')
})

httpServer.listen(80);
httpsServer.listen(443);