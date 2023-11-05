// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    // Your SMTP settings or a service like SendGrid
  });

  const mailOptions = {
    from: '"Website Contact Form" <no-reply@example.com>',
    to: "your-email@example.com",
    subject: `New message from ${firstName} ${lastName}`,
    text: `You have a new message from the contact form:
    
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
    // You can also use `html` key to send HTML emails
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
}
