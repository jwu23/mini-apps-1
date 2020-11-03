const express = require('express');
const db = require('./db/connection.js');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const pathName = path.join(__dirname, './public')

app.use(express.static(pathName));
app.use(parser.json())

app.get('/customer', (req, res) => {
  console.log('request Body', req.body);
  db.connection.query(`SELECT * FROM information;`, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      console.log("heree is data",data)
      res.send(data);
    }
  })
})

app.post('/newCustomer', (req, res) => {
  db.connection.query(`INSERT INTO information (name, email, password) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}");`, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
})

app.put('/address', (req, res) => {
  db.connection.query(`UPDATE information SET address = "${req.body.address}", city = "${req.body.city}", state = "${req.body.state}", zip = "${req.body.zip}" WHERE name = "${req.body.name}" AND email = "${req.body.email}" AND password = "${req.body.password}";`, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
})

app.put('/card', (req, res) => {
  console.log(req.body)
  db.connection.query(`UPDATE information SET number = ${req.body.number}, expiration = "${req.body.expiration}", cvv = ${req.body.cvv}, billing = ${req.body.billing} WHERE name = "${req.body.name}" AND email = "${req.body.email}" AND password = "${req.body.password}";`, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})