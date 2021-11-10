function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const myInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const myBoxes = document.getElementById('boxes');

function createBoxes(amount) {
  let myHtml = '';
  let size = 30;
  let myColor;
  for (let i = 0; i < amount; i += 1) {
    myColor = getRandomHexColor();
    myHtml += `<div class="cls${i+1}">`;
    myHtml += `<style> .cls${i + 1} 
    {width: ${size}px; height: ${size}px; background-color: ${myColor};}</style></div>`;
    size += 10;
  }
  myBoxes.insertAdjacentHTML('beforeend', myHtml);

};

const destroyBoxes = () => {
  myBoxes.innerHTML = " ";
  console.log(myBoxes);
};

const inputCheck = (value) => {
   if (value==="") return alert("fill the input!")
};

const createItem = () => {
  inputCheck(myInput.value);
  createBoxes(myInput.value);
  console.log(myBoxes);
};
createBtn.addEventListener('click', createItem);
destroyBtn.addEventListener('click', destroyBoxes);