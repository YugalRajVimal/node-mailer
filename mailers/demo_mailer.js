import { transporter, renderTemplate } from "../config/nodemailer.js";

export let newDemoMail = () => {
  console.log("Inside newComment mailer");

  transporter.sendMail(
    {
      // ToDo - Set sender and receiver mail
      from: "", //sender mail
      to: "", //receiver mail
      subject: "New Mail",
      html: "<h1>Hello, this is a mail from node mailer.</h1>",
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending mail : ", err);
        return;
      }
      console.log("Message Sent ", info);
      return;
    }
  );
};
