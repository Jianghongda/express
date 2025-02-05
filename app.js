const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()


const PROT = process.env.PROT || 3000
const router = require('./router/index')
const routerVideo = require('./router/video')
const e = require('express')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(morgan('dev'))


app.use('/user', router)
app.use('/video', routerVideo)

app.get('/users/:id', (req, res, next) => {
  console.log(req.params)
  // console.log(`${req.method}---${req.url}`);
  res.send(`${req.method}---${req.url}`)

})

app.use((req, res, next) => {
  res.status(404).send('404 Not Found.')
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('service Error')
})

app.listen(PROT, () => {
  console.log(`Server is running at http://localhost:${PROT}`)
}) 
