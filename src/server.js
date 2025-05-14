"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var intent_classifier_1 = require("./intent-classifier");
//parsing middleware
var app = express();
app.use(express.json());
var PORT = 3000;
app.use(express.json());
//api route: Chatbot Intent Classification
app.post("/chat", function (req, res) {
    var userMessage = req.body.message;
    var intent = (0, intent_classifier_1.classifyText)(userMessage);
    res.json({ intent: intent });
});
app.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT));
});
