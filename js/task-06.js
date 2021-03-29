const input = document.querySelector('#validation-input');
const validationInput = input.dataset.length;


function inputAction(action) {
    if (action.target.value.length == validationInput) {
        input.setAttribute('class', 'valid')
    } else { input.setAttribute('class', 'invalid')}
        
       
}

input.addEventListener('blur', inputAction);