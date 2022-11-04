const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routes);
app.use(express.static('public'));

const startServer = () => {
    const server = app.listen(process.env.PORT || port, function () {
      console.log(`Server running on port ${server.address().port}`);
    });
};

module.exports = startServer;