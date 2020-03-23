const express= require('express')
const server =express()
const actionRouter=require("./Router/actionRouter")
server.use(express.json())
server.use("/actions", actionRouter)

module.exports=server