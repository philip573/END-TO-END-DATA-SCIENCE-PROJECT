let model;

async function loadModel() {
  model = await tf.loadLayersModel('model_js/model.json');
  console.log("Model Loaded");
}

loadModel();

document.getElementById('predictForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const study = parseFloat(document.getElementById('study').value);
  const sleep = parseFloat(document.getElementById('sleep').value);
  const attendance = parseFloat(document.getElementById('attendance').value);

  const inputTensor = tf.tensor2d([[study, sleep, attendance]]);
  const prediction = model.predict(inputTensor);
  const result = await prediction.data();

  document.getElementById('result').textContent = "Predicted Score: " + result[0].toFixed(2);
});
