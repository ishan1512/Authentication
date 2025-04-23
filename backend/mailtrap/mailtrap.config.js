//const { MailtrapClient } = require("mailtrap");
import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv"

dotenv.config()

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email:"hello@demomailtrap.co",
  name: "Ishan",
};
// const recipients = [
//   {
//     email: "ishanjohariij@gmail.com", 
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);