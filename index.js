const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const caserouter=require('./routes/cases')
const updatesrouter=require('./routes/updates')
const app=express()
const port=process.env.PORT || 3000
 
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(caserouter)
app.use(updatesrouter)
//create a logger 
 
  mongoose.connect( process.env.Mongo_url,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false}).then(()=>{
      console.log('connected to mongodb database')
}).catch((error)=>{
    console.log('error in connection with the database'+error)
})
 
app.listen(port,()=>{
   console.log('server running on port',port);
})