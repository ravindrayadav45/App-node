import express from "express"
const app = express()
import FormRoutes from "./routes/form.routes.js"
import { FormDB } from "./config/database.js"

const PORT = process.env.PORT


//database
FormDB()

//Middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())


//routes
app.use("/",FormRoutes)



app.listen(PORT,()=>{
  console.log(`server listening on port ${PORT} `)
})