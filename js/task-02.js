const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector('#ingredients');

function createElement(arr) {
     let itemsArr = []; 
    arr.forEach(element => {
        const itemList = document.createElement('li')
        itemList.textContent = element
        itemsArr.push(itemList)
    });
    return ingredientsUl.prepend(...itemsArr)
}
createElement(ingredients)