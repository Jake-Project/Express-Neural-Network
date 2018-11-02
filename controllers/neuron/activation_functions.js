
module.exports = {

  //Step function (also called Binary Function) gives a 1 at the output if calculated sum > 0 else it gives a 0.
  //Takes the neuron value and calculates if it is ><0
  stepFunction: function(neuronValue){

    if(neuronValue > 0){
      console.log("1")
      return(1)
    } else {
      console.log("0")
      return(0)
    }

  },

  //Linear Function
  linearFunction: function(neuronValue){

  },

  //Sigmoid Function
  sigmoidFunction: function(neuronValue){

  }

}
