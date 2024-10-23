const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const submitButton = document.getElementById('submitButton');
const outputParagraph = document.getElementById('output');    

function displayBMI() {
    const height = heightInput.value;
    const weight = weightInput.value;
    const BMI = (weight * 703)/Math.pow(height, 2)
    outputParagraph.textContent = `Your BMI is: ${BMI}`;
}   
    submitButton.addEventListener('click', displayMessage);
    heightInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            displayMessage();
        }
    });
    weightInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            displayMessage();
        }
    });