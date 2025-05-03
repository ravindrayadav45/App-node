import express from "express"
const app = express()
import FormRoutes from "./routes/form.routes.js"
import { FormDB } from "./config/database.js"




//database
FormDB()

//Middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())


//routes
app.use("/",FormRoutes)


const PORT = process.env.PORT  ||5000;
app.listen(PORT,()=>{
  console.log(`server listening on port ${PORT} `)
})
