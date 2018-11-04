//Import the activation_function file
const activationFunction = require('./activation_functions.js')

//Import the neuron object file
const neuron = require('./neuron.js')

//Set the amount of nodes per layer. This is useful for now but eventually the user should be able to decide
var maxNodes = 4;

module.exports = {

  //TODO Generate an array containing the input's, hidden layers and outputs
  //TODO Currently, only one weight is created for each neuron. This is incorrect and the weights that are created should be directly affected by how many neurons are in the next layer.
  //TODO Currently the bias function is not included as a neuron but this needs to be incorporated somehow
  generate: function(){
    console.log("called generate_network.generate")

    //Multidimensional array for the network
    var neuralNetwork =  []

    //Create the different layers and nodes per layer
    for(var layers = 0; layers < 4; layers++){

      //Array for current layer we are populating
      var layer = []

      for(var nodes = 0; nodes < maxNodes; nodes++){

        //Have only 2 inputs at layers 0 and 2 outputs at layer 3
        if(layers == 0 || layers == 3){
          //Allow for only 2 nodes for input and output
          if(nodes > 1){
            break
          }
        }

        //Add another node to the layer
        layer[nodes] = neuron.create()
      }

      //Add the layer to the network
      neuralNetwork[layers] = layer

    }

    neuralNetwork = generateOutputWeights(neuralNetwork)

    return(neuralNetwork)


  },

  //TODO Destroy a network
  destroy: function(){

  },

  //TODO Saves the weights inside of the network and exports the weights to TODO some sort of file???
  save: function(){

  }

}

//Function to generate how many output weights each neuron in a layer needs after the network has been created
//Takes the neural network as an input and calculates the amount of nodes in the next layer
function generateOutputWeights(neuralNetwork){
  //Go through each layer of the network
  for(var layer = 0; layer < neuralNetwork.length; layer++){

    //Create an array of output weights for each neuron
    var outputWeights = []

    //Go through each neuron in each layer
    for(var neuron = 0; neuron < neuralNetwork[layer].length; neuron++){

      //If the layer in question is not the output layer
      if(layer != neuralNetwork.length - 1){
        //For each neuron in the next layer (- 1 because of the bias) create a new weight //TODO THE BIAS LAYER IS NOT INCLUDED YET SO DONT WORRY

        for(var nextLayerNeurons = 0; nextLayerNeurons < neuralNetwork[layer + 1].length - 1; nextLayerNeurons++){
          outputWeights[nextLayerNeurons] = setOutputWeight()

          //If all of the next layers neurons have had their weights calculated for the current neuron - add the weights to the current neurons weight array
          if(nextLayerNeurons == neuralNetwork[layer + 1].length - 2){
            neuralNetwork[layer][neuron].outputWeights = outputWeights
          }
        }
      }
    }

    console.log("The amount of output weights for layer " + layer + " Is Equal to: " + outputWeights.length)
  }
  return(neuralNetwork)
}

//Function to randomly set the initial output weight of a connection
function setOutputWeight(){
  return(Math.random())
}
