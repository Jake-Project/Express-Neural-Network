# Application Description
A  simple Express Application which is capable of running different tests for me to learn how Neural networks work.

## Readme Explanation
Any parts of the Readme which have not been filled in do not have any functionality. This is an ongoing project which is a sideline to my current studies at Aberystwyth University.

## How to run the Application
1. Download the Express Application from GitHub.
2. Find the parent folder using Terminal and type node app.js
3. You will get a message stating that the Server is running on port 3000.
4. Go to a browser of your choice and type -> http://localhost:3000/api/perceptronTest/perceptronTest
5. You shall be greeted by the amount of Epochs that it took for the Perceptron to be trained for AND.
6. The Learning Rate can be changed by editing the 'learningRate' variable in perceptron.js

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
