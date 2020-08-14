const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')
const { findById } = require('./models/user')
const app = express()
const port = process.env.PORT


// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})

// const main = async ()=>{
//     // const task = await Task.findById('5f2e2b804cffb2287cda981d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // const user = await User.findById('5f2e2b414cffb2287cda981b')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()
///////////////
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send("GET requests are disabled")
//     }else{
//         next()
//     }

// })
// //Site Maintenance Middleware
// app.use((req,res,next)=>{
//     res.status(503).send("Site is currently down. Check back soon.") 
// })