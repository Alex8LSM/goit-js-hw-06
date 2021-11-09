let counterValue = 0;
const myValue = document.querySelector('#value');
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const increment = () => {
    counterValue += 1;
    myValue.innerText = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    myValue.innerText = counterValue;
};
incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
