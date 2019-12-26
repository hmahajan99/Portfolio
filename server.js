const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_APIKEY,
  }),
  url: process.env.WATSON_URL,
});


assistant.createSession({
  assistantId: process.env.WATSON_ASSISTANT_ID
})
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
    console.log(res.result.session_id)
    let session_id = res.result.session_id;


    assistant.message({
      assistantId: process.env.WATSON_ASSISTANT_ID,
      sessionId: session_id,
      input: {
        'message_type': 'text',
        'text': 'howdy'
        }
      })
      .then(res => {
        console.log("CHATRES\n",JSON.stringify(res, null, 2));
        console.log("FINALE\n",res.result.output.generic[0].text)

        assistant.deleteSession({
          assistantId: process.env.WATSON_ASSISTANT_ID,
          sessionId: session_id,
        })
          .then(res => {
            console.log("DELETE TOKEN")
            console.log(JSON.stringify(res, null, 2));
          })
          .catch(err => {
            console.log(err);
          });


      })
      .catch(err => {
        console.log(err);
      });
    


  })
  .catch(err => {
    console.log(err);
  });


// app.listen(port, () => console.log(`Listening on port ${port}`))