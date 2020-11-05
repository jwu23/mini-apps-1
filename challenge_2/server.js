const fs = require('fs');
const express = require('express');
const path = require('path');
const parser =require('body-parser');
const app = express();

const PORT = 3000;

const pathName = path.join(__dirname, './client');
app.use(express.static(pathName));
app.use(parser.urlencoded());

app.post('/upload', (req, res) => {
  // console.log('body', req.body);

  var inputData = JSON.parse(req.body.description);
  console.log(inputData)
  var result = [];

  var recurse = (input) => {
    var resultString = '';

    for (var key in input) {
      if (key === 'children' && input[key].length !== 0) {
        for (var i = 0; i < input[key].length; i++) {

          recurse(input[key][i])
        }
      } else {
        resultString += input[key] + ','

      }

    }

    resultString = resultString.substring(0, resultString.length - 1);
    result.push(resultString);
  }
  recurse(inputData);

  var newString = '';
  for (var i = 0; i < result.length; i++) {
    newString += result[i] + '\n'
  }

  console.log('new String', newString)
  fs.readFile('./samples/csv_report.csv', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      fs.writeFile('./samples/csv_report.csv', data + newString, 'utf8', (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Success')
        }
      })

    }
  })

  res.send(result);
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})