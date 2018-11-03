const express = require('express')
const router = express.Router()
const request = require('request')

var neuron = require('../controllers/neuronNetwork/network_test.js')

var deleteMe = require('../controllers/neuronNetwork/run_network.js')

router.get('/neuron/test', function(req, res){
  console.log("Called /routes/network/neuron")

  neuron.test(function(callback){
    console.log("perceptron test got callback from the controller")
    res.sendStatus(JSON.stringify(callback))
  })
})

router.get('/test', function(req, res){
  console.log("Called /routes/network/test")
  deleteMe.test(function(callback){
    res.sendStatus(JSON.stringify(callback))
  })
})

module.exports = router
