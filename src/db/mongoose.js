const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

//cd c/users/'vikas soni'
//mongodb/bin/mongod.exe --dbpath=mongodb-data

// const me = new User({
//     name: "Vikas",
//     email: 'vikaSSOnix@gmail.com',
//     age: 21,
//     password: 'vikassoni123'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error : ", error)
// })

//Task Model

// const myTask = new Task({
//     description: "Run",
// })

// myTask.save().then((myTask) => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log("Error : ", error)
// })