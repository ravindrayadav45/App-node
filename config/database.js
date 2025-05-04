import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

 export const FormDB =()=>{
  mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log('Database Connected')
})

}



