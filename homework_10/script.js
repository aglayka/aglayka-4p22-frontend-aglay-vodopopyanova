'use strict';
// код для выполнения пункта 1
const one = document.querySelector('.input-one');
one.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.setAttribute('disabled', 'disabled');
    let userData = [];
    fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((response) => {
        userData = response.data;
        console.log('-----------');
        console.log('Пункт No1:');
        console.log('-----------');
        console.log(response);
    })
})

// код для выполнения пункта 2
const two = document.querySelector('.input-two');
two.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.setAttribute('disabled', 'disabled');
    let userData = [];
    fetch('https://reqres.in/api/users?per_page=12') 
    .then((response) => response.json())
    .then((response) => {
        userData = response.data;
        console.log('-----------');
        console.log('Пункт No2:');
        console.log('-----------');
        userData.forEach(user => {
            console.log(user.last_name);
        })
    })
})

// код для выполнения пункта 3
const three = document.querySelector('.input-three');
three.addEventListener('click', (e) => {  
    e.preventDefault(); 
    e.currentTarget.setAttribute('disabled', 'disabled');
    let userData = []; 
    fetch('https://reqres.in/api/users?page=2') 
    .then((response) => response.json())
    .then((response) => {
        userData = response.data;
        userData = userData.filter(user => (user.last_name[0] === 'F'))
        console.log('-----------');
        console.log('Пункт No3:');
        console.log('-----------');
        userData.forEach((user) => {
            console.log(user.last_name, user.first_name, user.email, user.id, user.avatar);
        })
    })
})

// код для выполнения пункта 4
const four = document.querySelector('.input-four');
four.addEventListener('click', (e) => {  
    e.preventDefault(); 
    e.currentTarget.setAttribute('disabled', 'disabled');
    let userData = []; 
    fetch('https://reqres.in/api/users?per_page=12') 
    .then((response) => response.json())
    .then((response) => {
        userData = response.data;
        const reduceBasa = userData.reduce((accumulator, item, index, array) => {
            let reduceString = `${item.first_name} ${item.last_name}`;
            if (index !== array.length - 1) {
                reduceString += ', ';
            }
            accumulator += reduceString; 
            return accumulator    
            },'Наша база содержит данные следующих пользователей: ')
        console.log('-----------');
        console.log('Пункт No4:');
        console.log('-----------');
        console.log(reduceBasa);
    })
})

// код для выполнения пункта 5
const five = document.querySelector('.input-five');
five.addEventListener('click', (e) => { 
    e.currentTarget.setAttribute('disabled', 'disabled');
    e.preventDefault(); 
    let userData = []; 
    fetch('https://reqres.in/api/users?per_page=12') 
    .then((response) => response.json())
    .then((response) => {
        userData = response.data;
        const objUsers = userData[0]
        console.log('-----------');
        console.log('Пункт No5:');
        console.log('-----------');
        Object.keys(objUsers).forEach((usersKey) => {
            console.log(usersKey);
        })
    })
})

