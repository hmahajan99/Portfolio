const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const message = require('./controllers/message');
const sessions = require('./controllers/sessions');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_APIKEY,
  }),
  url: process.env.WATSON_URL,
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res)=> { res.send("ITS WORKING") });
app.post('/message', (req, res) => { message.sendMessage(req, res, assistant) });
app.post('/createsession', (req, res) => { sessions.createSession(req, res, assistant) });
app.post('/deletesession', (req, res) => { sessions.deleteSession(req, res, assistant) });

app.listen(port, ()=> {
  console.log(`app is running on port ${port}`);
})

