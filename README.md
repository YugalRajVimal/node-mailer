# Node Mailer Demo with DelayedJobs

This project demonstrates how to send emails using Nodemailer in a Node.js application, along with DelayedJobs functionality implemented using Kue and Redis.

## Overview

This project now includes functionality for DelayedJobs using Kue and Redis. The main components are:

- `index.js`: Entry point of the application. It sets up an Express.js server to handle HTTP requests and enqueues jobs for sending demo emails.
- `workers/demo_worker.js`: Defines a worker that processes enqueued jobs to send emails using Nodemailer.
- `config/kue.js`: Configuration file for Kue, a priority job queue backed by Redis.
- `mailers/demo_mailer.js`: Contains the function to send emails using Nodemailer, with email content rendered using EJS templates.
- `config/nodemailer.js`: Configures the Nodemailer transporter and provides a function to render EJS templates for email content.
- `views/mailers/demo_mail.ejs`: EJS template file for the email content.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Gmail credentials:

   - Open `config/nodemailer.js` and update the `user` and `pass` fields with your Gmail credentials.

4. Customize email sender and receiver:

   - In `mailers/demo_mailer.js`, update the `from` and `to` fields with appropriate email addresses.

5. Customize email template:

   - Modify `views/mailers/demo_mail.ejs` to customize the content of the email.

6. Start Redis server:

   - Ensure that Redis server is installed and running on your machine or accessible via a remote server.

7. Start the server:

   ```bash
   node index.js
   ```

8. Trigger the sending of a demo email:

   - Send a POST request to `http://localhost:8080/`.

## File Structure

```plaintext
.
├── index.js
├── workers
│   └── demo_worker.js
├── config
│   ├── kue.js
│   └── nodemailer.js
├── mailers
│   └── demo_mailer.js
└── views
    └── mailers
        └── demo_mail.ejs

## Dependencies

- [ejs](https://www.npmjs.com/package/ejs): ^3.1.9
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [kue](https://www.npmjs.com/package/kue): ^0.11.6
- [nodemailer](https://www.npmjs.com/package/nodemailer): ^6.9.10
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.1.0


```
