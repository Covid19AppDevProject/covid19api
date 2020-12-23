const express=require('express')
const mongoose=require('mongoose')
const {Cases,validatecase}=require('../models/cases')
const app=express()
const router=new express.Router()
 
router.post('/cases',async (req,res)=>{
    const cases=new Cases({
        CountryStatename: req.body.CountryStatenameji,
            
            TotalCase:req.body.TotalCaseji,
            
            Activecase:req.body.Activecaseji ,
            
            Recoveredcase:req.body.Recoveredcaseji ,
           Death:req.body.Deathji
    })
    try{
       await cases.save()

       res.send(cases)
     
    }
    catch(e){
            res.status(400).send(e)

    }

})

router.get('/cases', async (req,res)=>{
    
    try{ 
  const cases=await Cases.find({})
  res.status(201).send(cases)

    }
    catch(e){
        res.status(500).send(e)
    }
    
})
router.get('/cases/:id',async (req,res)=>{
    const _id=req.params.id
    try{
         const cases=await Cases.findById(_id)
         res.status(201).send(cases)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.put('/cases/:id', async(req,res)=>{
    const _id=req.params.id
   try{ const cases=await Cases.findByIdAndUpdate(_id,{
    CountryStatename: req.body.CountryStatenameji,
        
        TotalCase:req.body.TotalCaseji,
        
        Activecase:req.body.Activecaseji ,
        
        Recoveredcase:req.body.Recoveredcaseji ,
       Death:req.body.Deathji
},{new:true})
res.status(201).send(cases)
}
    catch(e){
        res.status(400).send(e)
    }
})
router.delete('/cases/:id',async (req,res)=>{
    const _id=req.params.id
    try{
         const cases=await Cases.findByIdAndDelete(_id)
         res.status(201).send(cases)
    }
    catch(e){
        res.status(400).send(e)
    }
})


module.exports=router
