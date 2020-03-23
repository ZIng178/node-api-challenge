const express=require('express')
const projectdata=require("../data/helpers/projectModel");
const router=express.Router()

router.get("/", (req,res)=>{
    projectdata.get()
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message :"cannot get projects"})
    })
})

router.get("/:id", (req,res)=>{
    const {id}=req.params
    projectdata.getProjectActions(id)
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message:"error"})
    })
})

router.post("/", (req,res)=>{
    const body=req.body
    projectdata.insert(body)
    .then(projects=>{
        res.status(201).json(projects)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message:"error posting"})
    })
})

router.put("/:id", (req,res)=>{
    const {id}=req.params
    const changes=req.body
    projectdata.update(id,changes)
    .then(updated =>{
        if(updated){
            res.status(200).json(updated)
        }else{
            res.status(404).json({message:`project with the specific id does not exist`})
        }
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message :`error updating data`})
    })
        
    
})

module.exports=router