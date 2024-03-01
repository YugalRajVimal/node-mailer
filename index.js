import express from "express";
import queue from "./config/kue.js";
import demoWorker from "./workers/demo_worker.js";

const app = express();

app.post("/", (req, res) => {
  let job = queue.create("emails", "Demo Mail").save((err) => {
    if (err) {
      console.log("Error in creating a queue");
      return;
    }
    console.log("Job enqueued ", job.id);
  });
  res.send("Mail Sent Successfully");
});

app.listen(8080, () => {
  console.log("Server is running on port: ", 8080);
});
