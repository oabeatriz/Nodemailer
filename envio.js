const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
porta = 443

app.get('/', (req, res) => {
  res.end('Enviando email utilizando nodemail')

  
})

app.get('/sendemail', async (req, res) => {
  
  var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "355ef7860601e6",
    pass: "36213ecdebc535"
  }
});
  


var message = {
  from: "beatriz@server.com",
  to: "anabiaoliveira899@hotmail.com",
  subject: "Teste do reprograme-se",
  text: "Beatriz, \n\n você solicitou o teste NODE.",
  html: "<h3>Prezada Beatriz, </h3> <br> <p>Segue o teste de NODE</p>"
};

transport.sendMail(message, function(err) {
  if (err)
    return res.status(400).json({
      erro: true,
      mensagem: "Erro, email não enviado"
    });
    
  else
    return res.json({
      erro: false,
      mensagem: "Email enviado com sucesso"
    });
});
  });

app.listen(porta, () => {console.log("Server rodando")});