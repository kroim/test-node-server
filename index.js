const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3300, function () {
    console.log("server started: http://127.0.0.1:3300");
});