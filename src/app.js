const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')
const { findById } = require('./models/user')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


module.exports = app
















// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })
