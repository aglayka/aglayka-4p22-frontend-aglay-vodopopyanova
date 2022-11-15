'use strict'
 
const inputEmail =  document.querySelector('.registration__input_email');
const inputPassword =  document.querySelector('.registration__input_password');
const inputPasswordDouble =  document.querySelector('.registration__input_passdouble');
 /* ошибка */ 
const errorEmail = document.querySelector('.registration__label_errorEmail');
const errorPassword = document.querySelector('.registration__label_errorPassword');
const errorPasswordDouble = document.querySelector('.registration__label_errorPasswordDouble');
/* пусто */ 
const emptyEmail = document.querySelector('.registration__label_emptyEmail');
const emptyPassword = document.querySelector('.registration__label_emptyPassword');

let btn = document.querySelector('.registration__button');
    
btn.addEventListener('click', function (e) {
    e.preventDefault();
    

 function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;      
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
} 
/* пусто */
    if(!inputEmail.value) {
        inputEmail.classList.add('borderred');
        inputEmail.classList.remove('bordergray');
        errorEmail.classList.remove('show');
        emptyEmail.classList.add('show');
     } else

/* ошибка */       
    if (validateEmail(inputEmail.value) !== true) {
        inputEmail.classList.add('borderred');
        inputEmail.classList.remove('bordergray');
        emptyEmail.classList.remove('show');
        errorEmail.classList.add('show');
    } else {
        inputEmail.classList.add('bordergray');
        inputEmail.classList.remove('borderred');
        errorEmail.classList.remove('show');
        emptyEmail.classList.remove('show');
    }

    let passwordDouble = inputPasswordDouble.value;
    let password = inputPassword.value;
/* пусто */   
    if(!password) {
        inputPassword.classList.add('borderred');
        inputPassword.classList.remove('bordergray');
        errorPassword.classList.remove('show');
        emptyPassword.classList.add('show');          
    } else

/* ошибка */ 
    if (password.length < 8) {
        inputPassword.classList.add('borderred');
        inputPassword.classList.remove('bordergray'); 
        emptyPassword.classList.remove('show'); 
        errorPassword.classList.add('show');
    } else { 
        inputPassword.classList.add('bordergray');
        inputPassword.classList.remove('borderred');
        errorPassword.classList.remove('show');
        emptyPassword.classList.remove('show'); 
    }
    
/* ошибка */ 
    if ((passwordDouble !== password) || !passwordDouble) {
        inputPasswordDouble.classList.add('borderred');
        inputPasswordDouble.classList.remove('bordergray');
        errorPasswordDouble.classList.add('show');
    } else {  
        inputPasswordDouble.classList.add('bordergray');
        inputPasswordDouble.classList.remove('borderred');
        errorPasswordDouble.classList.remove('show');
 
/* вывод валидных значений */ 
        if (validateEmail(inputEmail.value) === true && password.length >= 8 && password === passwordDouble){
            makeData();
        }
    }

    function makeData() {
        const data = Object();
        data.email = inputEmail.value;
        data.password = password;
        console.log(data);
    }
});
