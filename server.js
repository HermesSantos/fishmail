import { SMTPServer } from "smtp-server";
import {simpleParser} from "mailparser";
import express from "express";

let content

const mailServer = new SMTPServer({
  authOptional: true,
  onData(stream, session, callback) {
    simpleParser(stream)
      .then((mail) => {
        content = mail.text
      })
  }
})

mailServer.listen(2525, ()=>{
  console.log('SMTP listening on 2525')
});

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send(content)
})
app.use("/", router)

app.listen(8082, () => {
  console.log('User UI running on port 8082')
})
