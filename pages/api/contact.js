import NodeMailer from 'nodemailer'

require('dotenv').config()


const PASSWORD = process.env.password

export default function (req, res) {
    /* We will use this transporter to keep the receiving email details */
    const transporter = NodeMailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'chenwi.webdev@gmail.com',
        pass: 'fsawnddsgwsghyrk',
      },
      secure: true,
    })
  
  const mailData = {
  from: 'chenwi.webdev@gmail.com',
  to: 'chenwieugene.j@gmail.com',

    subject: `Message from ${req.body.name}`,
    text: req.body.message,
  html: `<div>${req.body.message}</div> <p>${req.body.email}</p>`
  }
  
  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log(error)
    }
    else {
      console.log(info)
    }

    res.status(200)
  })

  console.log('API rout is working' + req.body)
  res.send('success')
}

