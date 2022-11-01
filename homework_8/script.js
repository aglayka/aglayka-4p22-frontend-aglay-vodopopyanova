'use strict'

let firstArgument = document.querySelector('.input-one');
let secondArgument = document.querySelector('.input-two');
const operator = document.querySelector('.input-operator');
let result = document.querySelector('.input-resultat');
const btn = document.querySelector('.input-expression');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const num1_str = String(firstArgument.value);
    const num2_str = String(secondArgument.value);

    if ((num1_str.length === 0) || (num1_str.indexOf(' ') != -1)) {
        result.innerHTML = "Первое число не указано";
        alert('Первое число не указано');
        return console.log('Первое число не указано');
    }
    if ((num2_str.length === 0) || (num2_str.indexOf(' ') != -1)) {
        result.innerHTML = 'Второе число не указано';
        alert('Второе число не указано');
        return console.log('Второе число не указано');
    }
    const num1 = Number(firstArgument.value);
    const num2 = Number(secondArgument.value);
    let res;

    if (num1 === '' && num1 !== 0) {
        result.innerHTML = 'Первое число не указано';
        alert('Первое число не указано');
        return console.log('Первое число не указано');   
    }

    if (num2 === '' && num2 !== 0) {
        result.innerHTML = 'Второе число не указано';
        alert('Второе число не указано');
        return console.log('Второе число не указано');
    }

    if (isNaN(num1) === true || isNaN(num2) === true) {
        result.innerHTML = 'Некорректный ввод чисел';
        alert('Некорректный ввод чисел');
        return console.log('Некорректный ввод чисел');
    }

    console.log(num1, num2,);

if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch (operator.value) {
        case '+':
            res = num1 + num2;
            result.innerHTML = res;
            alert(res);
            console.log(res);
            break;
        case '-':
            res = num1 - num2;
            result.innerHTML = res;            
            alert(res);
            console.log(res);
            break;
        case '/':
            res = num1 / num2;
            result.innerHTML = res;            
            alert(res);
            console.log(res);
            break;
        case '*':
            res = num1 * num2;
            result.innerHTML = res;
            alert(res);
            console.log(res);
            break;   
        case '':
            result.innerHTML = 'Не введён знак'; 
            alert('Не введён знак');
            console.log('Не ввёден знак');
            break;  
        default: 
            result.innerHTML = 'Программа не поддерживает такую операцию';
            alert('Программа не поддерживает такую операцию');
            return console.log('Программа не поддерживает такую операцию'); 
    }    
} 

if (res === Infinity || res === -Infinity) {
    result.innerHTML = 'Операция некорректна';
    alert('Операция некорректна');
    return console.log('Операция некорректна');
}
})

