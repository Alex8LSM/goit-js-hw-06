const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
ingredients.forEach(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.className = 'item';
  list.append(item);
});
