import mongoose from "mongoose"

const formSchema = mongoose.Schema({
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  email:{
    type: String
  },
  phoneNo:{
    type: String
  },
  fatherName:{
    type: String
  },
  motherName:{
    type: String
  },

   address:{
    type: String
  }
})
const formData = mongoose.model('formData',formSchema)
export default formData