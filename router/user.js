const express = require('express')
const userController = require('../controller/usercontroller')

const router = express.Router()

router
  .post('/register', userController.register)
  .get('/list', userController.list)
  .delete('/', userController.delete)

module.exports = router

