const express = require('express')


const app = express()

const PROT = process.env.PROT || 3000

// 挂载路由
app.use('/api',router)

// 挂载统一处理服务端中间件
app.use(errorHandler())

app.listen(PROT,()=>{
  console.log(`Server is running at http://localhost:${PROT}`)
})
