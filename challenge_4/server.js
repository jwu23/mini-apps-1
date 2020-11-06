const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

const pathName = path.join(__dirname, './client/dist')
app.use(express.static(pathName));

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening on ${port}`)
  }
})