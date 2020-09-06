var express = require('express');
var indexRouter = require('./router/index');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'react/build')));
app.use('/api', indexRouter);
app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, 'react/build', 'index.html')); });

var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});