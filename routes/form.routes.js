
import express from "express"
const router = express.Router()
import formData from "../models/formData.models.js" 

router.post('/submit-form',async(req,res)=>{
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

router.get('/',(req,res)=>{
  res.render('form')
  
})

export default router