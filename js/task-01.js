const categories = document.querySelectorAll('.item');
const categoriesNumber = categories.length;
console.log(`Number of categories: ${categoriesNumber}`);
for (const category of categories) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.childElementCount}`);
}