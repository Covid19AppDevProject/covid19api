const mongoose =require('mongoose')
const yup=require('yup')

const Cases=mongoose.Schema({
CountryStatename:{
type:String,
required:true,
trim:true
},

TotalCase:{
    type:String,
    required:true,
    trim:true
},

Activecase:{
    type:String,
    required:true,
    trim:true
},

Recoveredcase:{
    type:String,
    required:true,
    trim:true
},

Death:{
    type:String,
    required:true,
    trim:true
},
  
});
const validatecase=(cases) =>{
    const schema=yup.object().shape({
       CountryStatenameji:yup.string().required().min(1).max(300),
       TotalCaseji:yup.string().required().min(1).max(5000),
      Activecaseji:yup.string().required().min(1).max(2000),
     Recoveredcaseji:yup.string().required().min(1).max(2000),
    Deathji: yup.string().required().min(1).max(2000)  
 });
 return schema.validate(cases).then((cases)=>cases).catch((error) =>{
     return {
         message:error.message
        }
 });
}
 
exports.Cases=new mongoose.model('Cases',Cases);
exports.validatecase=validatecase;