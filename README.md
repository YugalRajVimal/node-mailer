# Node Mailer Demo

This project demonstrates how to send emails using Nodemailer in a Node.js application.

## Overview

This project consists of three main files:

- `index.js`: Entry point of the application. It sets up an Express.js server to handle HTTP requests and triggers the sending of a demo email.
- `mailers/demo_mailer.js`: Defines a function `newDemoMail` which sends an email using Nodemailer. It also renders the email content using EJS templates.
- `config/nodemailer.js`: Configures the Nodemailer transporter and provides a function to render EJS templates for email content.

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

6. Start the server:

    ```bash
    node index.js
    ```

7. Trigger the sending of a demo email:

    - Send a POST request to `http://localhost:8080/`.

## Dependencies

- [express](https://www.npmjs.com/package/express): ^4.18.2
- [nodemailer](https://www.npmjs.com/package/nodemailer): ^6.9.10
- [ejs](https://www.npmjs.com/package/ejs): ^3.1.9
  
## File Structure

```plaintext
.
├── index.js
├── mailers
│   └── demo_mailer.js
├── config
│   └── nodemailer.js
└── views
    └── mailers
        └── demo_mail.ejs

