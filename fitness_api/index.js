var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;
    
app.get('/', function(req, res) {
    res.send("hey");
});

app.listen(port, function() {
    console.log("APP RUNNING ON PORT " + port);    
});