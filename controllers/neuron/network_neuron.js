//A file to contain an object which can be used as a neuron in a network

//Input IDS for second hidden layer will be something like a1,a2,a3,a4,a5,b1 - Where B is the bias

//Import the activation_function file
const activationFunction = require('./activation_functions.js')

/*
Create an object for the neuron
id - The ID for this Neuron
inputWeights - An array of all of the incoming weights where [n] matches inputIds nad inputValues
inputIds - An array of all of the incoming connections where [n] matches inputWeights and inputValues so that the weights are stored properly
calculatedOutput - The calculated output
outputIds - The IDS for the outputs which this neuron will send the calculated output
activationFunction - The stored function which is used to activate the neuron
*/
function Neuron(id, inputWeights, inputIds, calculatedOutput, outputIds, activationFunction){
  this.id = id
  this.inputWeights = inputWeights
  this.inputIds = inputIds
  this.calculatedOutput = calculatedOutput
  this.outputIds = outputIds
  this.activationFunction = activationFunction
}

//Global variables for both of the hidden layers
var firstHiddenLayer = []
var secondHiddenLayer = []

var input1 = [0,1,0,1]
var input2 = [0,0,1,1]

//For the 2 layers. Layer1 = biasOne, layer2 = biasTwo
var biasOne = -1
var biasTwo = -1

var outputOne = 0




module.exports = {

  //Function that allows for us to test if a Neuron Object is created properly
  test: function(callback){


    firstHiddenLayer = []
    secondHiddenLayer = []

    //First layer of the network. Needs 2 * Math.random() because there are 2 weights from the input layer to the first layer
    for(var i = 0; i < 4; i++){
      firstHiddenLayer[i] = new Neuron("1." + (i + 1), [Math.random(), Math.random()], ["input1", "input2"], null, ["2.1", "2.2", "2.3", "2.4"], activationFunction.stepFunction())
    }

    //Second layer of the network. Needs 4 * Math.random() because there are 4 weights from first layer to second
    for(var i = 0; i < 4; i++){
      secondHiddenLayer[i] = new Neuron("2." + (i + 1), [Math.random(), Math.random(), Math.random(), Math.random()], ["1.1", "1.2", "1.3", "1.4"], null, ["Output1"], activationFunction.stepFunction())
    }

    calculateNetwork()

    callback(firstHiddenLayer)
  }
}

//Function to calculate all of the processes in the network
function calculateNetwork(){
  //Calculate for everything in the first hidden layer
  console.log("calculating the network")
  for(var i = 0; i < firstHiddenLayer.length; i++){
    console.log(firstHiddenLayer[i].inputWeights.length)
    console.log(firstHiddenLayer[i].inputIds)

    //Calculate for all of the inputs for the first hidden layer
    for(var index = 0; index < firstHiddenLayer[i].inputWeights.length; index++){
      //Get weight for current input
      var currentWeight = firstHiddenLayer[i].inputWeights[index]
      console.log("Weight Is: " + currentWeight)
      //Get ID for current input
      var currentInputId = firstHiddenLayer[i].inputIds[index]
      //Get Value From ID For current input
      var currentInputIdValue = eval(currentInputId)
      console.log("Value is " + currentInputIdValue)
      
      console.log("The current weight which we are looking at is: " + currentWeight + ". The inputID associated with this weight is: " + currentInputId)
    }
  }
}

//Function to calculate the bias value and weight
function calculateBias(){

}
