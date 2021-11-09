const myInput = document.getElementById('name-input');
const myOutput = document.getElementById('name-output');

myInput.addEventListener('input', (event) => {
    if (event.target.value === "")
        myOutput.textContent = 'Anonymous';
    else myOutput.textContent = event.target.value;
});