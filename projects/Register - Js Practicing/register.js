const inpName = document.getElementById('name-input');
const inpEmail = document.getElementById('email-input');
const inpPassword = document.getElementById('password-input');
const inpConfirmPassword = document.getElementById('confirm-password-input');
const showPassword = document.getElementById('eye-password');
const btnSubmit = document.getElementById('btn-submit');
const spnNameError = document.getElementById('span-name-error');
const spnEmailError = document.getElementById('span-email-error');
const chkTerms = document.getElementById('terms-checkbox');
const spnPasswordError = document.getElementById('span-password-error');
const spnConfirmPasswordError = document.getElementById('span-confirm_password-error');
const formRegister = document.getElementById('register-form');
const inpNum = document.getElementById('number-input');
const divVerifyEmail = document.querySelector('.verify-email');
const divsRegister = document.querySelectorAll('.register')
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');

let username = '';
let email;
let password;

const noPermitedCharacters = ['\t', '\n', '\r', ',', ';', ':', '&', '*', '+', '=', '%', '#', '$', '^', '@', '!', '?', '<', '>', '(', ')', '[', ']', '{', '}', '|', '\\', '/', '\'', '\"', '`'];

btnSubmit.disabled = true;

function verifyName(){
    //Iterando para revisar si contiene alguno de los caracteres no permitidos
    let containsNoPermitedCharacter = false;
    for(let i = 0; i < noPermitedCharacters.length; i++){

        if (inpName.value.includes(noPermitedCharacters[i])) {
            containsNoPermitedCharacter = true;
            break
        }else{
            containsNoPermitedCharacter = false;
        }
    }
    if (containsNoPermitedCharacter) {
        spnNameError.textContent = 'El nombre no puede contener caracteres especiales';
    }else{
        spnNameError.textContent = '';
        return  true;
    }
};
function verifyEmail(){
    let expReg= /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
    ;

    if (!expReg.test(inpEmail.value)) {
        spnEmailError.textContent = 'Ingrese un correo electrónico válido';
    }else{
        spnEmailError.textContent = '';
        return true;
    }
};
function verifyPasswords(){
    if (inpConfirmPassword.value !== inpPassword.value) {
        spnConfirmPasswordError.textContent = 'Las contraseñas no coinciden';
    } else {
        spnConfirmPasswordError.textContent = '';
        return true;
    }
};


showPassword.addEventListener('click', () =>{
    if(!inpPassword.value == 0){
        if (inpPassword.type == 'password') {
            inpPassword.type = 'text';
            inpConfirmPassword.type = 'text';
            showPassword.style.opacity = 1
        } else {
            inpPassword.type = 'password';
            inpConfirmPassword.type = 'password';
            showPassword.style.opacity = 0.5
        }
    }
})

inpName.addEventListener('blur', () => {
    verifyName();
})


inpEmail.addEventListener('blur', () => {
    verifyEmail();
})

inpPassword.addEventListener('input', () => {
    let highSecurity = /(?=.*[A-Z])(?=.*\d)/;

    if (inpPassword.value.length >= 8) {
        circle1.style.backgroundColor = 'green';
        circle2.style.backgroundColor = '#fff';
        circle3.style.backgroundColor = '#fff';
        spnPasswordError.textContent = '';
        if(inpPassword.value.length > 8){
            circle2.style.backgroundColor = 'green';
            circle3.style.backgroundColor = '#fff';
            if (highSecurity.test(inpPassword.value)) {
                circle3.style.backgroundColor = 'green';
            } else {
                circle3.style.backgroundColor = '#fff';
            }
        }else{
            circle2.style.backgroundColor = '#fff';
        }
    }else if(inpPassword.value.length < 8 && inpPassword.value.length > 0) {
        circle1.style.backgroundColor = 'orange';
        spnPasswordError.textContent = 'La contraseña debe contener un minimo de 8 caracteres';

    }else if (inpPassword.value.length === 0){
        circle1.style.backgroundColor = '#fff';
        circle2.style.backgroundColor = '#fff';
        circle3.style.backgroundColor = '#fff';
        spnPasswordError.textContent = '';
    }
})

inpConfirmPassword.addEventListener('input', () => {
    verifyPasswords();
})


formRegister.addEventListener('input', () => {
    if (verifyName && verifyEmail && verifyPasswords && chkTerms.checked){
        username = inpName.value;
        email = inpEmail.value;
        password = inpPassword.value;
        btnSubmit.disabled = false;
    }else{
        btnSubmit.diabled = true;
    }
})

formRegister.addEventListener('submit', (event) =>{
    event.preventDefault();
    divsRegister.forEach(element => {
        element.style.transform = "scale(0)";
    });
    divVerifyEmail.style.transform = 'scale(1)';

})

inpNum.addEventListener('input', () =>{
    if (inpNum.value.length > 6){
        inpNum.value = inpNum.value.slice(0,6);
    }
})
