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

router.get 


module.exports=router