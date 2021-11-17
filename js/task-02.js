const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const myArray=[];
const list = document.getElementById('ingredients');
ingredients.forEach(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.className = 'item';
  myArray.push(item);
});
list.append(...myArray)