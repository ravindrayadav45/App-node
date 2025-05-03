import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

 export const FormDB =()=>{
  mongoose.connect(process.env.MONGO_URL,{
   useNewUrlParser:true,
   ssl:true,
   tls:true,
   tlsAllowInvalidCertificates:false
   
  }).then(()=>{
  console.log('Database Connected')
})

}



