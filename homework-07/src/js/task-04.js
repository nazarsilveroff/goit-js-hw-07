let counterValue = 0
const decrementBtn = document.querySelector(
    '#counter button[data-action="decrement"]',
);
const incrementBtn = document.querySelector(
    '#counter button[data-action="increment"]',
);
const value = document.querySelector('#value');
function decrement() {
    value.textContent = counterValue -= 1;
}

function increment() {
    value.textContent = counterValue += 1;
}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);