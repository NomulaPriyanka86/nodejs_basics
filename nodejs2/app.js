const express = require('express');
const path = require('path');
const app = new express();

console.log(__dirname);                                         /*F:\My Journey UpGrad\nodejs2 */
app.use(express.static(path.join(__dirname, "/public")));
app.listen(5000, () => {  
    console.log("Server running on 5000");
});

app.get("/about", (req,res) => { 
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send("am from about!!!!!! "); // send Hello World to this route
})



// // importing Person class in this

// const Person = require('./person');
// const priyanka= new Person('priyanka',30);
// priyanka.greeting();