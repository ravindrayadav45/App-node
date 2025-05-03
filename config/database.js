import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

 export const FormDB =()=>{
  mongoose.connect(process.env.MONGO_URL,
      useNewUrlParser:true, 
      useUnifiedTopology:true,
      tlsInsecure:true
   ).then(()=>{
  console.log('Database Connected')
})

}



