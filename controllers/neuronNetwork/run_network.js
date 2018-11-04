//TODO Needs the weights saved somewhere as a global variable here in case they need saving

//Import the activation_function file
const network = require('./generate_network.js')

module.exports = {

  //Function to train a network against a given input and an expected output
  train: function(callback){
    var generatedNetwork = network.generate()

    //TODO This is only for testing and it is to prove that we can set the inputs of the network simply
    generatedNetwork[0][0].output = 1
    generatedNetwork[0][1].output = 0

    callback(generatedNetwork)
  },

  //Function to allow for the use of the network
  test: function(callback){

  }
}

//Function to recalculate the weights
function backwardsPropogation(){

}
