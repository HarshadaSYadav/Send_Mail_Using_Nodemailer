require('dotenv').config();
const nodemailer = require('nodemailer');

// Step 1: Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, Outlook, etc.)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Your email password or App Password (if 2FA is enabled)
    },
});

// Step 2: Define the email options
const mailOptions = {
    from:  process.env.EMAIL_USER, // Sender address
    to:  process.env.EMAIL_USER, // List of recipients
    subject: 'Test Email from Node.js', // Subject line
    text: 'Hello,This is a Test Email sent using Nodemailer.', // Plain text body
    html: '<p>Hello, this is a <b>test email</b> sent using Nodemailer.</p>', // HTML body (optional)
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
