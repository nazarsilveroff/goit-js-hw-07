const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUl = document.querySelector('#gallery');
galleryUl.classList.add('gallery-list')

function createElement(arr) {
 const imagesLi = arr.map(element => {
     const itemList = document.createElement('li')
     itemList.insertAdjacentHTML(`beforeend`, `<img src="${element.url}" alt="${element.alt}">`)
     itemList.classList.add('gallery-list__item')
     return itemList
    });
    return galleryUl.prepend(...imagesLi)
}
createElement(images)