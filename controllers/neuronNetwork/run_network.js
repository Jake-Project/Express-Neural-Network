//TODO Needs the weights saved somewhere as a global variable here in case they need saving

//Import the activation_function file
const network = require('./generate_network.js')

module.exports = {

  //Function to train a network against a given input and an expected output
  train: function(){

  },

  //Function to allow for the use of the network
  test: function(callback){
    callback(network.generate())
  }
}

//Function to recalculate the weights
function backwardsPropogation(){

}
