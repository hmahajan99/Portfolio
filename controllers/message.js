const sendMessage = (req, res, assistant) => {
  const { message, sessionId } = req.body;
  assistant.message({
    assistantId: process.env.WATSON_ASSISTANT_ID,
    sessionId,
    input: {
      'message_type': 'text',
      'text': message
      }
    })
    .then(assistantResponse => {
      // console.log("Response to message",JSON.stringify(assistantResponse, null, 2));
      let reply = assistantResponse.result.output.generic[0].text;
      res.json({reply});
    })
    .catch(err => {
      console.log("error sending message",err);
      res.status(400).json({reply: "Error sending message"});
    });
  
}

module.exports = {
  sendMessage: sendMessage
}
