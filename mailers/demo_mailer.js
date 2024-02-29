import { transporter, renderTemplate } from "../config/nodemailer.js";

export let newDemoMail = () => {
  let htmlString = renderTemplate(
    {
      name: "Demo Mail",
    },
    "/demo_mail.ejs"
  );

  transporter.sendMail(
    {
      // ToDo - Set sender and receiver mail
      from: "sender@gmail.com", //sender mail
      to: "receiver@gmail.com", //receiver mail
      subject: "New Mail",
      html: htmlString,
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
