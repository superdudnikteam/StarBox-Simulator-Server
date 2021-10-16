const express = require('express');
const { logger } = require('./helpers');

const app = express();
const fs = require('fs');

var https = require('https');
var http = require('http');

var privateKey  = fs.readFileSync('./key.pem', 'utf8');
var certificate = fs.readFileSync('./cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var gameServer = https.createServer(credentials, app);
var gameServerHTTP = http.createServer(app);

try {

// Utils i think:
app.use('/bs-bs/get_version.php', require('./routes/get_version'))
app.use('/bs-bs/time.php', require('./routes/time'))
app.post('/bs-bs/v13/verify_player.php', (req, res) => res.status(200).send('popka'))

//Profiles:
app.use('/bs-bs/v13/create_player.php', require('./routes/create_player'))
app.use('/bs-bs/v13/get_profile.php', require('./routes/get_profile'))

//Leaderboards:
app.use('/bs-bs/v13/get_leaders.php', require('./routes/get_leaders'))
app.use('/bs-bs/v13/get_daily_leaders.php', require('./routes/get_leaders'))

app.all('*', (req,res) => {
    logger('info', `Packet ${req.originalUrl.replace('/bs-bs/v13/', '').replace('.php', '')} not handled`)
    res.status(404).send('Not found')
});
} catch (e) {
    logger('error', e.toString())
    res.status(500).send('Server error')
}

process.on('uncaughtException', function(err) {
  logger('error', err.toString())
});

logger('info', 'HTTP server starting on port 80');
gameServerHTTP.listen(80)
logger('info', 'HTTPS server starting on port 443');
gameServer.listen(443)