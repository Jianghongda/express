const express = require('express')

const router = express.Router()

router.get('/list', (req, res, next) => {
  console.log(req.method);
  // JSON.parse('(')
  res.send('/video-list')
})

router.get('/users', (req, res, next) => {
  console.log(req.method);
  res.send('/video-users')
})

module.exports = router

