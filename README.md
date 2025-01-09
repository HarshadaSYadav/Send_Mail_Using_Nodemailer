# Send Email Using Nodemailer
This project demonstrates how to send emails using **Nodemailer**, a popular Node.js module for email delivery. The script uses a Gmail account to send an email to a recipient. It also shows how to securely store email credentials using environment variables and how to run the script in your local development environment.

This project is perfect for beginners who want to integrate email functionality into their Node.js applications or learn how to interact with email servers using SMTP.

## Features
- Send emails using Gmail's SMTP server.
- Use environment variables for secure email credentials.
- Simple and easy-to-understand setup.

## Setup Instructions

1. Clone this repository:
    ```bash
    git clone https://github.com/username/send-email-using-nodemailer.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory:
    ```plaintext
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    ```

4. Run the script:
    ```bash
    node sendEmail.js
    ```

## Notes
- Ensure you have an App Password if using Gmail with 2FA.
- Do not share your `.env` file publicly to protect sensitive credentials.
