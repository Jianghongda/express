const express = require('express')
const userController = require('../controller/usercontroller')

const router = express.Router()

router
  .get('/list', userController.list)
  .delete('/', userController.delete)

module.exports = router

