const app = require('./app')

const port = process.env.PORT

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