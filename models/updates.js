const mongoose =require('mongoose')
const yup=require('yup')

const Updates=mongoose.Schema({
CountryStatename:{
type:String,
required:true,
trim:true
},
PostDescription:{
    type:String,
    required:true,
    trim:true
},

time:{
    type:String,
    required:true,
    trim:true
},
postlink:{
    type:String,
    required:true,
    trim:true
},

postimageslink:{
    type:String,
    required:true,
    trim:true
},
  
})
const validateupdate=(cases) =>{
    const schema=yup.object().shape({
       CountryStatenameji:yup.string().required().min(1).max(300),
       PostDescriptionji:yup.string().required().min(1).max(5000),
        timeji:yup.string().required().min(1).max(2000),
     postlinkji:yup.string().required().min(1).max(2000),
     postimageslink: yup.string().required().min(1).max(2000)  
 });
 return schema.validate(cases).then((cases)=>cases).catch((error) =>{
     return {
         message:error.message
        }
 });
}
exports.Updates=new mongoose.model('Updates',Updates);
exports.validateupdate=validateupdate;