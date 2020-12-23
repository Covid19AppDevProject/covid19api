const express=require('express')
const mongoose=require('mongoose')
const {Updates,validateupdate}=require('../models/updates')
const app=express()
const router=new express.Router()

router.post('/updates',async (req,res)=>{
    const updates=new Updates({
        CountryStatename:req.body.CountryStatenameji,
        PostDescription:req.body.PostDescriptionji ,
        
        time: req.body.timeji,
        postlink:req.body.postlinkji ,
        
        postimageslink:req.body.postimageslinkji ,
          
        })
    try{
       await updates.save()

       res.send(updates)
     
    }
    catch(e){
            res.status(400).send(e)

    }

})

router.get('/updates', async (req,res)=>{
    
    try{ 
  const updates=await Updates.find({})
  res.status(201).send(updates)

    }
    catch(e){
        res.status(500).send(e)
    }
    
})
router.get('/updates/:id',async (req,res)=>{
    const _id=req.params.id
    try{
         const updates=await Updates.findById(_id)
         res.status(201).send(updates)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.put('/updates/:id', async(req,res)=>{
    const _id=req.params.id
    try{
         const updates=await Updates.findByIdAndUpdate(_id,{
            CountryStatename:req.body.CountryStatenameji,
            PostDescription:req.body.PostDescriptionji ,
            
            time: req.body.timeji,
            postlink:req.body.postlinkji ,
            
            postimageslink:req.body.postimageslinkji ,
              
            },{new:true})
         res.status(201).send(updates)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.delete('/updates/:id',async (req,res)=>{
    const _id=req.params.id
    try{
         const updates=await Updates.findByIdAndDelete(_id)
         res.status(201).send(updates)
    }
    catch(e){
        res.status(400).send(e)
    }
})


module.exports=router
