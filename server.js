const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { request } = require("http");
mongoose.connect('mongodb://localhost/contact-database', {useNewUrlParser:true});
const port = 80;

//Making mongoose schema
const infoSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    message : String

});

const Info = mongoose.model('Info', infoSchema);

//Express specific stuff
app.use(express.static('public'));
app.use(express.json())


app.get('/contact', (req,res)=>{
    
    res.sendFile(__dirname + '/public/contactform.html')
})
app.get('/', (req,res)=>{
    
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/accessories', (req,res)=>{
    
    res.sendFile(__dirname + '/public/accessories.html')
})
app.get('/faqs', (req,res)=>{
    
    res.sendFile(__dirname + '/public/faq.html')
    
})
app.get('/book', (req,res)=>{
   
    res.sendFile(__dirname + '/public/book.html')
})
app.get('/explore', (req,res)=>{
   
    res.sendFile(__dirname + '/public/explore.html')
})

//Post request for storing data of contact form
app.post('/contact', async(req, res)=>{
var myData = new Info({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
});      
    console.log(myData)
    await myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})
})


//Post request for email
app.post('/',(req,res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'greenpaddle123@gmail.com',
            pass: '*********'
        }
        
    })
const mailOptions={
    from: 'greenpaddle123@gmail.com',
    to: req.body.email,
    subject: 'greenpaddle',
    text: 'Thank you for subscribing to greenPaddle. You will receive all new offers and deals.'
}
    transporter.sendMail(mailOptions, (error ,info)=>{
        if(error){
            console.log(error);
            res.send('error');
           
        } else{
            console.log('Email sent');
            res.send('success');
                
        }
    })
});

//app.listen
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
