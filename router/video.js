const express = require('express')
const videoController = require('../controller/videoController')
const router = express.Router()

router
  .get('/list', videoController.list)
  .delete('/',videoController.delete)

module.exports = router

