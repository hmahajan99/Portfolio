const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

const message = require('./controllers/message');
const sessions = require('./controllers/sessions');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
let assistant;

try {
  assistant = new AssistantV2({
    version: process.env.WATSON_VERSION,
    authenticator: new IamAuthenticator({
      apikey: process.env.WATSON_APIKEY,
    }),
    url: process.env.WATSON_URL,
  });  
} catch(err) {
  console.log(err);
}

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html')); 
  });
}

app.post('/message', (req, res) => { message.sendMessage(req, res, assistant) });
app.post('/createsession', (req, res) => { sessions.createSession(req, res, assistant) });
app.post('/deletesession', (req, res) => { sessions.deleteSession(req, res, assistant) });

app.listen(port, ()=> {
  console.log(`app is running on port ${port}`);
})

