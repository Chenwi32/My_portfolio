import NodeMailer from 'nodemailer'
export default function (req, res) {
    /* We will use this transporter to keep the receiving email details */
    const transporter = NodeMailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'chenwi.webdev@gmail.com',
        pass: '@Chenwi5132',
      },
      secure: true,
    })



    console.log('API rout is working' + req.body)
}