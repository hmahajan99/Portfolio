const createSession = (req, res, assistant) => {

  assistant.createSession({
    assistantId: process.env.WATSON_ASSISTANT_ID
  })
    .then(assistantResponse => {
      // console.log("Created session",JSON.stringify(assistantResponse, null, 2));
      let session_id = assistantResponse.result.session_id;
      res.json({sessionId: session_id});
    })
    .catch(err => {
      console.log("error creating session",err);
      res.status(400).json("error creating session");
    });

}

const deleteSession = (req, res, assistant) => {
  const { sessionId } = req.body;
  assistant.deleteSession({
    assistantId: process.env.WATSON_ASSISTANT_ID,
    sessionId
  })
    .then(assistantResponse => {
      // console.log("Deleting session",JSON.stringify(assistantResponse, null, 2));
      res.json("success");
    })
    .catch(err => {
      console.log("error deleting session",err);
      res.status(400).json("error deleting session");
    });

}

module.exports = {
  createSession: createSession,
  deleteSession: deleteSession
}
