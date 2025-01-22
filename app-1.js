const express = require('express')


const app = express()

const PROT = process.env.PROT || 3000

// function logs(req) {
//   console.log(`${req.method},${req.url},${Date.now()}`);
// }

// 在逻辑前使用中间件
app.use((req, res, next) => {
  console.log(`${req.method},${req.url},${Date.now()}`);
  next()
})

// 挂载路由
// app.use('/api', router)
app.get('/', (req, res) => {
  // logs(req)

  res.send('/index')
})

app.get('/register', (req, res) => {
  // logs(req)
  res.send('/register')
})

app.get('/login', (req, res) => {
  // logs(req)
  res.send('/login')
})

// 挂载统一处理服务端中间件
// app.use(errorHandler())


app.listen(PROT, () => {
  console.log(`Server is running at http://localhost:${PROT}`)
}) 
