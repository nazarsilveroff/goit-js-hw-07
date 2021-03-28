const categoriesUl = document.querySelector('ul')
const itemsLi = document.querySelectorAll('li.item');
const title = document.querySelector('h2');
console.log(`В списке ${itemsLi.length} категории.`);

itemsLi.forEach(item =>
    console.log(`
    - Категория: ${item.querySelector('h2').textContent}
    - Количество элементов: ${item.querySelectorAll('li').length} `),
);


