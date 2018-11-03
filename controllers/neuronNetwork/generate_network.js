//Import the activation_function file
const activationFunction = require('./activation_functions.js')

//Import the neuron object file
const neuron = require('./neuron.js')

module.exports = {

  //TODO Generate an array containing the input's, hidden layers and outputs
  generate: function(){
    console.log("called generate_network.generate")

    //Multidimensional array for the network
    var neuralNetwork =  []

    //Create the different layers and nodes per layer
    for(var layers = 0; layers < 4; layers++){

      //Array for current layer we are populating
      var layer = []

      for(var nodes = 0; nodes < 4; nodes++){

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

    return(neuralNetwork)


  },

  //TODO Destroy a network
  destroy: function(){

  },

  //TODO Saves the weights inside of the network and exports the weights to TODO some sort of file???
  save: function(){

  }

}
