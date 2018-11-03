//The Neurons will not need ID's because they are inside of a Multidimensional array.

module.exports = {

  create: function(){
    console.log("called neuron.create")
    var weight = setOutputWeight()
    var createdNeuron = new Neuron(weight, null, null)
    console.log(JSON.stringify(createdNeuron))
    return(createdNeuron)
  }

}
/*
Creates a neuron object
outputWeights - An array containing the weights for the connections to the neurons/outputs in the next layer
output - The calculated output after the inputs have been worked out and the activation function has taken effect
activationFunction - The stored function which is used to activate the neuron
*/
function Neuron(outputWeights, output, activationFunction){
  this.outputWeights = outputWeights,
  this.output = output,
  this.activationFunction = activationFunction
}

//Function to randomly set the initial output weight of a connection
function setOutputWeight(){
  return(Math.random())
}
