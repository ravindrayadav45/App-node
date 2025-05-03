import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

 export const FormDB =()=>{
  mongoose.connect(process.env.MONGO_URL,{
   useNewUrlParser:true,
   useUniedTopology:true
   tls:true,
   
   
  }).then(()=>{
  console.log('Database Connected')
})

}



