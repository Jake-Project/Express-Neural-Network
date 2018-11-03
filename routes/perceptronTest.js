const express = require('express')
const router = express.Router()
const request = require('request')

var perceptron = require('../controllers/neuronNetwork/perceptron.js')

router.get('/perceptronTest', function(req, res){
  console.log("Called /routes/perceptronTest/perceptronTest")

  perceptron.trainPerceptron(function(callback){
    console.log("perceptron test got callback from the controller")
    res.sendStatus(callback)
  })
})

module.exports = router
