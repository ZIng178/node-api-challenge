const express=require('express')
const actiondata=require("../data/helpers/actionModel");
const router=express.Router()

router.get("/", (req,res) =>{
    actiondata.get()
    .then(actions=>{
        res.status(200).json(actions)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message: 'Error getting actions '})
    })
})

router.get("/:id", (req,res) =>{
    actiondata.get()
    .then(actions=>{
        res.status(200).json(actions)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message: 'Error getting actions '})
    })
})

router.post("/", (req,res)=>{
    const body=req.body
    actiondata.insert(body)
    .then(actions=>{
        res.status(201).json({actions})
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({message :"Error posting actions"})
    })
})

router.delete("/:id", (req,res)=>{
const {id}=req.params;
actiondata.remove(id)
.then(deleted=>{
    if(deleted){
        res.status(200).json({message: `action id ${id} was deleted`})
    } else{
        res.status(400).json({message : `action id ${id} not found `})
    }
})
.catch(error=>{
    console.log(error)
    res.status(500).json({message:` cannot be deleted`})
})
})

module.exports=router