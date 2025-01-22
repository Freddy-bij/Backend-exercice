const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.listen("3500",()=>{
    console.log("run on port 3500")
})

app.get("/",(req,res)=>{
    res.send('hey hello guys')
})

mongoose.connect("mongodb+srv://freddybijanja31:zlS0DSGFD8hDByRg@cluster0.p6v6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connect to data base")
})
.catch((err) =>{
   console.log('connection is failed')
})

const Country = require("./models/country.model")

app.post("/api/country" ,  async (req,res)=>{
    try{
     const country = await Country.create(req.body);
     res.status(200).json(country) 
    }catch(error){
       res.status(500).json({message:error.message})
    }
})

app.get("/api/country" , async (req,res)=>{
    try{
    const {id} = req.params; 
     const country = await Country.find({});
     res.status(200).json(country)

    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.get("/api/country/:id" , async (req,res) =>{
   try{
     const {id} = req.params
   const country = await Country.findById(id);
   res.status(200).json(country)

   }catch(error){
     res.status(500).json({message:error.message})
   }
})

app.put("/api/country/:id" , async (req,res) =>{
  try{
   const {id}=req.params
   const country = await Country.findByIdUpdate(id,req.body);
   if(!country){
     return res.status(404).json({message:"country is not found"})
   }

   res.status(200).json({message:"country succeffuly update"})
  }catch(error){

  }
})

app.delete("/api/country:id" , async (req,res)=>{
     try{
    const {id} = req.params
      const country= await Country.findByIdAndDelete(id);
      if(!country){
        return res.status(404).json({message:"country is not found"})
      }
      res.status(200).json({message:"country is deleted succeffully"})
   
    }catch(error){
        res.status(500).json({message:error.message})
    }
})