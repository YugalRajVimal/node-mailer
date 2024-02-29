import express from "express";
import { newDemoMail } from "./mailers/demo_mailer.js";

const app = express();

app.post("/", (req, res) => {
  newDemoMail();
  res.send("Mail Sent Successfully");
});

app.listen(8080, () => {
  console.log("Server is running on port: ", 8080);
});
