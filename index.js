const express = require('express')
const app = express()
port =3000;
const mongoose = require('mongoose')
const formData = require('./models/formData.models')
mongoose.connect('mongodb://127.0.0.1:27017/personal-details')
.then(()=>{
  console.log('Database Connected')
})

//Middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())


//routes
app.post('/submit-form',async(req,res)=>{
  await formData.insertOne({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    phoneNo:req.body.phoneNo,
    fatherName:req.body.fatherName,
    motherName:req.body. motherName,
    address:req.body.address


  })
 
  res.redirect('/')
})

app.get('/',(req,res)=>{
  res.render('form')
  
})


app.listen(port,()=>{
  console.log(`server listening on port ${port} `)
})