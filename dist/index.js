"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (req, res) { return res.send('Hello World!!!!'); });
app.listen(port, function () { return console.log("\uD83D\uDE80 Example app listening on port " + port + "!"); });
//# sourceMappingURL=index.js.map