const express = require('express');
const chalk=require('chalk');
const app = express();

app.listen(4000, () => { 
    console.log("Server running on port 4000");
})

app.get("/", (req,res) => { 
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send("Hello World"); // send Hello World to this route
})
app.get("/isItWorking", (req,res) => { 
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send(chalk.red('yes it is working!!!!')); // send Hello World to this route
})