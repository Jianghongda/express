const express = require('express')


const app = express()

const PROT = process.env.PROT || 3000
const router = require('./router/index')
const routerVideo = require('./router/video')


app.use('/users', router)
app.use('/video', routerVideo)
app.listen(PROT, () => {
  console.log(`Server is running at http://localhost:${PROT}`)
}) 
