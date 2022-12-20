const express = require('express');
const app = express();
const port = process.env.PORT || 9000

const path = require("path");
const cors = require("cors");


app.get("/", (req,res) => {
    // res.send("Hello Word! is running nicely")
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log(`MeetingScheduler is running on port ${port}`);
})
