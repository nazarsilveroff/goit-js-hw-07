const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function inputAction(action) {
    const value = action.target.value
    output.textContent = value || 'незнакомец'
}

input.addEventListener('input', inputAction);