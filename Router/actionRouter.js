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

module.exports=router