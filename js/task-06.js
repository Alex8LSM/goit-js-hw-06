const myInput = document.getElementById('validation-input');

myInput.addEventListener('blur', event => {
    const myString = event.target.value;
    if (myString.length == myInput.dataset.length)
        myInput.classList.add("valid");
    else myInput.classList.add("invalid");
});
myInput.addEventListener('focus', event => {
    if (myInput.classList.contains('valid'))
        myInput.classList.remove('valid');
    if (myInput.classList.contains('invalid'))
        myInput.classList.remove('invalid');
});