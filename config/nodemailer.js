import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // ToDo - Set user and pass
    user: "",
    pass: "",
  },
});

export let renderTemplate = (data, relativePath) => {
  let mailHTML;
  console.log(__dirname);
  ejs.renderFile(
    path.join(__dirname, "../views/mailers", relativePath),
    data,
    function (err, template) {
      if (err) {
        console.log(err, "Error in rendering Template");
        return;
      }
      mailHTML = template;
    }
  );
  return mailHTML;
};
