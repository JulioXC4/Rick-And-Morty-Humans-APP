const express = require('express')
const router = express.Router()

const { getHumans } = require('../controllers/data.controller')

router.get('/humans', getHumans)

module.exports = router