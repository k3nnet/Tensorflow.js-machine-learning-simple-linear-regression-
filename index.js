import 'bootstrap/dist/css/bootstrap.css';
import * as tf from '@tensorflow/tfjs' ;
document.getElementById('output').innerText = "Hello World";
// Define a machine learning model for linear regression
const model = tf.sequential();

model.add(tf.layers.dense({units: 1, inputShape: [1]}));
let config={loss: 'meanSquaredError', optimizer: 'sgd'}
// Specify loss and optimizer for model
model.compile(config);

// Prepare training data
const tx= tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ty= tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// Train the model
model.fit(tx, ty, {epochs: 500}).then(() => {
    // Use model to predict values
    model.predict(tf.tensor2d([5], [1,1])).print();
     // Use model to predict values
     document.getElementById('predictButton').disabled = false;
     document.getElementById('predictButton').innerText = "Predict";
});
// Register click event handler for predict button
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
    let val = document.getElementById('inputValue').value;
    console.log(val);
    const result= model.predict(tf.tensor2d([parseInt(val)], [1,1]));
  let  values= result.dataSync();
const arr = Array.from(values);
console.log(values[0]);
console.log(arr);
    
    document.getElementById('output').innerText =values[0];
});