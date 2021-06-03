const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyparser = require("body-parser")
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/danceContact', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 8000;

// Define mongoose shema
 var contactSchema = mongoose.Schema({
     name: String,
     phone: String,
     email: String,
     address: String,
     desc: String
    })

 var Contact = mongoose.model("contact", contactSchema)

app.use("/static", express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"))

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {message: "your form has been submitted"}
    console.log(params);
    console.log(req.body)
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
})

// Getting post request
app.post('/contact', (req, res)=>{
    const myData = new Contact(req.body)
    console.log(req.body)
    myData.save().then(() => {
        res.send("This item has been submited to the database")
    }).catch(() => {
        res.status(400).send("There is some problem in submitting this data in database")
    })
    // res.status(200).render('contact.pug');
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

