function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const myColor = document.querySelector('.color');
const myBtn = document.querySelector('.change-color');

const changeColor = () => {
  const newColor = getRandomHexColor();
  myColor.innerText = newColor;
  document.body.style.backgroundColor = newColor;
};
myBtn.addEventListener('click', changeColor);
