const form = document.querySelector('.form-itens');
const username = document.querySelector('#form-name');
const email = document.querySelector('#form-email');
const phone = document.querySelector('#form-phone');
const cpf = document.querySelector('#form-cpf');
const password = document.querySelector('#form-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const cpfValue = cpf.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        errorValidation(username, "*Campo Obrigatório*");
    } else {
        successValidation(username);
    }
    
    if (emailValue === '') {
        errorValidation(email, "*Campo Obrigatório*");
    } else {
        successValidation(email);
    }
    
    if (phoneValue === '') {
        errorValidation(phone, "*Campo Obrigatório*");
    } else {
        successValidation(phone);
    }
    
    if (cpfValue === '') {
        errorValidation(cpf, "*Campo Obrigatório*");
    } else {
        successValidation(cpf);
    }
    
    if (passwordValue === '') {
        errorValidation(password, "*Campo Obrigatório*");
    } else {
        successValidation(password);
    }
};

function errorValidation(input, message) {
    const inputInfo = input.parentElement;
    const span = inputInfo.querySelector('span');
    const validate = document.querySelector('.validate');

    span.innerText = message;

    validate.className = 'validate no-completed';
    validate.innerText = 'Campos obrigatórios não registrados.';

    inputInfo.className = 'input-info error';
};

function successValidation(input) {
    const inputInfo = input.parentElement;
    const validate = document.querySelector('.validate');
    const span = inputInfo.querySelector('span');

    span.innerText = '';

    validate.className = 'validate completed';
    validate.innerText = 'Sucesso!';
    inputInfo.className = 'input-info';
};
