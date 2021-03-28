const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const box = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
    let newBoxes = [];
    for (let i = 0; i < amount; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBox.style.backgroundColor =
            '#' + (((1 << 24) * Math.random()) | 0).toString(16);
        newBoxes.push(newBox);
    }
    box.prepend(...newBoxes);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}