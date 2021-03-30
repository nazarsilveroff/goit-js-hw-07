const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUl = document.querySelector('#ingredients');


const itemsArr = ingredients.map(el => {
  const itemList = document.createElement('li')
  itemList.textContent = el
  return itemList
})
ingredientsUl.append(...itemsArr)


