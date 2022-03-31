const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

const nodeMailer = require('nodemailer');

app.use(express.json())
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'bereka.contact@gmail.com',
//     pass: 'berekaCoffee@2022',
//   },
// });



let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 587, false for other ports
  requireTLS: true,
  auth: {
      user:'bereka.contact@gmail.com', 
      pass: 'berekaCoffee@2022', 
  },
});

app.post(
  '/api/send-mail',
  async (req, res) => {
    console.log(req.body)
  let message =`
          from : ${req.body.email} 
          Name : ${req.body.name}
          Subject : ${req.body.subject}
          message : ${req.body.message}
  `
var mailOptions = {
      from: req.body.email,
      to: 'z.w.henok@gmail.com',
      subject: 'Website user ',
      text:message,
    };

    transporter.sendMail(
      mailOptions,
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log(
            'Email sent: ' + info.response
          );
        }
      }
    );
 res.status(200).send('');
  }
);


const port = process.env.PORT || 9000;
app.listen(port, () =>
  console.log(`listening to port ${port}`)
);
