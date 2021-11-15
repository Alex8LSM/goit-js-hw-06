const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let string = '';
const list = document.getElementById('ingredients');
ingredients.forEach(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.className = 'item';
  string += item.outerHTML;
});
list.innerHTML =string;
