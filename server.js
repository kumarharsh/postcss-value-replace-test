var express = require('express');

var app = express();
app.use(express.static("build"));

app.listen(4000, function () {
  console.log('listening on port 4000!')
})
