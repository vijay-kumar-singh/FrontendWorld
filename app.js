'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
//app.use(express.static(path.join(__dirname, 'angularApp/dist/')));
app.get('/', (req, res) => {
  res.status(200).send('Hello, vijay singh!');
});
app.get('/reactjs', (req, res) => {
  app.use(express.static(path.join(__dirname, 'reactapp/build')));
  res.sendFile(path.join(__dirname, 'reactapp/build', 'index.html'));
});
app.get('/angular', (req, res) => {
  app.use(express.static(path.join(__dirname, 'angularApp/dist/angularApp')));
  res.sendFile(path.join(__dirname, 'angularApp/dist/angularApp', 'index.html'));
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;