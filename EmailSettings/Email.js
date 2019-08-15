const password = require("../config");
const nodemailer = require("nodemailer");

exports.sendEmail = function(req, res) {
      console.log("HER");
  nodemailer.createTestAccount((err, account) => {
      console.log("HER1");
    const htmlEmail = `
                  <h3> Upplýsingar </h3>
                  <ul>
                        <li> <h3>Nafn sendanda: <strong>${
                          req.body.name
                        }</strong></h3></li>
                        <li> <h3>Veffang sendanda: <strong>${
                          req.body.email
                        }</strong></h3></li>
                        <li> <h3>Símanúmer sendanda: <strong>${
                          req.body.phone
                        }</strong></h3></li>
                  </ul>
                  
                  <h1> Viðfangsefni: ${req.body.title}</h1>
      
                  <p>
                        ${req.body.text}
                  </p>
            `;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Prentverkbotti@gmail.com",
        pass: `${password.pass}`
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    let mailOption = {
      from: "Prentverkbotti@gmail.com",
      to: "gss21@hi.is",
      subject: `${req.body.title}`,
      html: htmlEmail
    };
    transporter.sendMail(mailOption, (err, info) => {
      if (err) return console.log(err);
      console.log(info);
    });
  });
  res.send("SENT");
};
