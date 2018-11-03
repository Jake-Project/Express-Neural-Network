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

//Inputs into the network
var input1 = [0,1,0,1]
var input2 = [0,0,1,1]

//TODO BACKWARDS propogation
//TODO Activation function defined inside of the object is not currently used. INstead they are all step (binary) functions

var expectedOutput = [0, 0, 0, 1]

var actualOutput = [0, 0, 0, 0]

//For the 2 layers. Layer1 = biasOne, layer2 = biasTwo
var biasOne = -1
var biasTwo = -1

//The output of the neural network
var output = new Neuron(output,  [Math.random(), Math.random(), Math.random(), Math.random()], ["2.1", "2.2", "2.3", "2.4"], null, null, activationFunction.stepFunction())


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

  //Do the calculation for every set in the epoch
  for(var n = 0; n < input1.length; n++){

    console.log("Calculating the first layer")
    for(var p = 0; p < firstHiddenLayer.length; p++){

      //Get the values to plug into the Neurons in layer 1
      var inputOneValue = input1[n]
      var inputTwoValue = input2[n]

      var inputOneWeight = firstHiddenLayer[p].inputWeights[0]
      var inputTwoWeight = firstHiddenLayer[p].inputWeights[1]

      var inputOneCalc = calculateWeightsAndValues(inputOneValue, inputOneWeight)
      var inputTwoCalc = calculateWeightsAndValues(inputTwoValue, inputTwoWeight)
      var biasCalc = calculateWeightsAndValues(biasOne, Math.random()) //TODO MATH.RANDOM IS DEFINATELY NOT THE CORERCT THING FOR HERE. NEED TO MAKE ANOTHER NEURON FOR IT

      var neuronCalculatedValue =  inputOneCalc + inputTwoCalc + biasCalc

      console.log("HAHAHHAHHAHHAHAA: " + neuronCalculatedValue)
      firstHiddenLayer[p].calculatedOutput = activationFunction.stepFunction(neuronCalculatedValue)
    }

    console.log("Calculating the second layer")
    for(var i = 0; i < secondHiddenLayer.length; i++){
      console.log(secondHiddenLayer[i].inputWeights.length)
      console.log(secondHiddenLayer[i].inputIds)

      //TODO Fix this. Essentially the addition of all of the inputs
      var finalLayerTwoCalculationBeforeActivationFunction = 0

      //Calculate for all of the inputs for the first hidden layer
      for(var index = 0; index < secondHiddenLayer[i].inputWeights.length; index++){
        //Get weight for current input
        var currentWeight = secondHiddenLayer[i].inputWeights[index]

        //Get ID for current input
        var currentInputId = secondHiddenLayer[i].inputIds[index]
        //Get Value From ID For current input
        //var currentInputIdValue = eval(currentInputId)

        var currentInputIdValue = firstHiddenLayer[index].calculatedOutput
        console.log("----------------------------------")
        console.log("Current Input Id = " + currentInputId + "\nThe Weight For This Input Is: " + currentWeight + "\nThe Value For This Input Is: " + currentInputIdValue)
        console.log("----------------------------------")

        finalLayerTwoCalculationBeforeActivationFunction + calculateWeightsAndValues(currentInputIdValue, currentWeight)

      }
      finalLayerTwoCalculationBeforeActivationFunction + calculateWeightsAndValues(biasOne, Math.random()) //TODO MATH.RANDOM IS DEFINATELY NOT THE CORERCT THING FOR HERE. NEED TO MAKE ANOTHER NEURON FOR IT
      secondHiddenLayer[i].calculatedOutput =  activationFunction.stepFunction(finalLayerTwoCalculationBeforeActivationFunction)
    }

    console.log("Calculating the output")
  }
}

//Function to calculate the bias value and weight
function calculateWeightsAndValues(value, weight){
  return(value * weight)
}
