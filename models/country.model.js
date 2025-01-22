const mongoose = require("mongoose");
const coutrySchema = mongoose.Schema(
    {
      name:{
        type:String,
        required:true
      },
      president:{
      type:String,
      require:true
      },
      population:{
        type:Number,
        required:true,
        default:0
      },
      continent:{
        type:String,
        required:true
      },
      flags:{
        type:String,
        required:false
      }
    
    },{timesTamps:true}
)

const Country = mongoose.model('Country',coutrySchema)
module.exports=Country
