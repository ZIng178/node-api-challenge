const express= require('express')
const server =express()
const actionRouter=require("./Router/actionRouter")
const projectRouter=require("./Router/actionRouter")
server.use(express.json())
server.use("/actions", actionRouter)
server.use("/projects", projectRouter)

module.exports=server