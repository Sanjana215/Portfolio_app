import nodemailer from "nodemailer";

export const handleEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.PASSWORD, // Use your App Password here
      },
    });

    let mailOptions = {
      from: process.env.EMAIL, // Gmail requires this to be your authenticated email
      to: "sanjanasimha159@gmail.com",
      replyTo: email, // This allows you to reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
};
