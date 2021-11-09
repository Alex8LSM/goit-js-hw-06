const myInput = document.getElementById('font-size-control');
const myText = document.getElementById('text');

myInput.addEventListener('input', event => {
    myText.style.fontSize = `${event.target.value}px`;
});
