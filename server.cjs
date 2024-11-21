const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer Transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service (e.g., Gmail, Yahoo, etc.)
  auth: {
    user: 'rajurao1106@gmail.com', // Replace with your email
    pass: 'rpnk giqy qlic vqsc', // Replace with your email password or app-specific password
  },
});

// Contact Form Route
app.post('/send-mail', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Your email to receive messages
    subject: `Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
