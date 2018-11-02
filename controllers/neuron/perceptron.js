//File which brings the activation functions together along with the bias and input to test a simple perceptron

//Import the activation_function file
const activationFunction = require('./activation_functions.js')

//Learning rate is the rate at which the perceptron can learn
var learningRate = 0.1

//If perceptron has beeen trained to fix the problem
var perceptronTrained = false

//Bias values
var biasWeight = 0
var biasValue = -1

//input A values
var inputAWeight = 0
var andMathA = [0, 1, 0, 1]

//input B values
var inputBWeight = 0
var andMathB = [0, 0, 1, 1]

//Outputs perceptron decides for each Epoch
var actualOutputs = [0, 0, 0, 0]

//Correct output that we wish to find
var correctOutputs = [0, 0, 0, 1]

module.exports = {

  //Function that does all of the training for the perceptron
  trainPerceptron: function(){
    //Calculate the initial input weights
    generateInitialInputWeights()

    while(perceptronTrained == false){

      var calculatedBias = biasCalculation()

      //This represents a whole entire epoch for the logical AND calculation
      for(var i = 0; i < correctOutputs.length; i++){
        var perceptronCalculatedValue = (andMathA[i] * inputAWeight) + (andMathB * inputBWeight) + calculatedBias

        //Calculate the output with the step function which is imported from activation_functions.js
        actualOutputs[i] = activationFunction.stepFunction(perceptronCalculatedValue)
      }

      //Compare the outputs and do backwards propogation
      compareOutputs(correctOutputs.length)
    }

  }

}

//Creates the initial weights for the inputs for the perceptron
function generateInitialInputWeights(){
  biasWeight = createRandomWeight()
  inputAWeight = createRandomWeight()
  inputBWeight = createRandomWeight()

  console.log("Initial bias Weight = " + biasWeight + ". Initial input a weight = " + inputAWeight + ". Initial input b weight = " + inputBWeight)
}

//Return a random weight for the inputs of the perceptron
function createRandomWeight(){
  return(Math.random())
}

//Calculate the bias
function biasCalculation(){
  return(biasWeight * biasValue)
}

//Calculate Perceptron output vs expected outputs
function compareOutputs(epochSize){
  var amountCorrect = 0
  for(var index = 0; index < epochSize; index++){

    if(actualOutputs[index] != correctOutputs[index]){
      backwardsPropogation(inputAWeight, inputBWeight, andMathA[index], andMathB[index], actualOutputs[index], correctOutputs[index])
    } else {
      amountCorrect += 1
    }

    console.log("Value " + index + " is equal to " + actualOutputs[index])
  }
  if(amountCorrect == 4){
    perceptronTrained = true
  }
}

//Calculate backwards propogation so that the weights can be changed
function backwardsPropogation(aWeight, bWeight, aValue, bValue, actualOutput, correctOutput){

  inputAWeight = inputAWeight + (learningRate * (correctOutput - actualOutput) * aValue)
  inputBWeight = inputBWeight + (learningRate * (correctOutput - actualOutput) * bValue)
  biasWeight = biasWeight + (learningRate * (correctOutput - actualOutput) * biasValue)

  if(inputAWeight < 0){
    inputAWeight = 0
  } else if(inputAWeight > 1) {
    inputAWeight = 1
  }

  if(inputBWeight < 0){
    inputBWeight = 0
  } else if(inputBWeight > 1) {
    inputBWeight = 1
  }

  if(biasWeight < 0){
    biasWeight = 0
  } else if(biasWeight > 1) {
    biasWeight = 1
  }
  console.log("Updated bias Weight = " + biasWeight + ". Updated input a weight = " + inputAWeight + ". Updated input b weight = " + inputBWeight)

}
