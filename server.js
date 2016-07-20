var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var time = req.params.time;
  res.send({
      "ipaddress":req.get('x-forwarded-for'),
      "language":req.get('accept-language').split(',')[0],
      "software":req.get('user-agent').match(/\(([^)]+)\)/)[1]
  });
});

app.listen(8080, function() {
  console.log('Timestamp Server listening on port 8080!');
});


