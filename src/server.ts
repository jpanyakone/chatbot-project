const express = require("express");
import {classifyText} from "./intent-classifier";

//parsing middleware
const app = express();
app.use(express.json());
const PORT = 3000;

app.use(express.json());

//api route: Chatbot Intent Classification
app.post("/chat", (req, res) =>{
    const userMessage = req.body.message;
    const intent: string = classifyText(userMessage);
    res.json({intent});
});

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});