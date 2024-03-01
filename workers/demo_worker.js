import queue from "../config/kue.js";
import { newDemoMail } from "../mailers/demo_mailer.js";

export default queue.process("emails", function (job, done) {
  console.log("Emails worker is processing a job", job.data);
  newDemoMail(job.data);
  done();
});
