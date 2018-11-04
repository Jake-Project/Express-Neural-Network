# Application Description
A  simple Express Application which is capable of running different tests for me to learn how Neural networks work.

## Readme Explanation
Any parts of the Readme which have not been filled in do not have any functionality. This is an ongoing project which is a sideline to my current studies at Aberystwyth University.

## How to run the Application
1. Download the Express Application from GitHub.
2. Find the parent folder using Terminal and type node app.js
3. You will get a message stating that the Server is running on port 3000.

## How to train a Perceptron to calculate AND
1. Go to a browser of your choice and type -> http://localhost:3000/api/perceptronTest/perceptronTest
2. You shall be greeted by the amount of Epochs that it took for the Perceptron to be trained for AND.
3. The Learning Rate can be changed by editing the 'learningRate' variable in perceptron.js

## How to build a network
1. Go to a browser of your choice and type -> http://localhost:3000/api/network/test
2. You shall be given a Multidimensional array which contains neurons, their associated weights and values

- This works by calling the network.js Route File which in turn calls the run_network.js controller. This file calls the controller 'generate_network.js' which makes the network by calling the neuron.js controller and creating the neuron objects. The generate network file stacks the neurons in layers and then adds the weights that it needs to make each layer mesh together.

- Eventually this will allow for the network to be built and trained. After training I will allow for the network to be tested and saved as some form of output file 


## Warning!!!
If you wish to run the application but access it from another device and you are a Windows User ->
1. Open Windows Firewall
2. Click Advanced Settings
3. Make a rule to allow for incoming and outgoing connections on the Port which this application is running on (Port is shown on startup and can be changed in app.js)
4. Restart the PC.
If these steps are not followed, it is likely that Windows Firewall will stop you from making a request from the other device to the Server running on your computer

## Controllers

### Perceptron
Used for testing a simple Perceptron with different types of activation functions (Currently only the Step Function) which can be declared by the user (Not Yet)


## Routes

### Perceptron Test
Testing route that allows for a single Perceptron to try and learn
