const input = document.querySelector('#validation-input');
const validationInput = input.dataset.length;


function inputAction(action) {
    return action.target.value.length == validationInput
        ? input.classList.add('valid')
        : input.classList.add('invalid')
}

input.addEventListener('blur', inputAction);