'use strict';
//первое задание
const one = document.querySelector('.input-one');

one.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.setAttribute("disabled", "disabled");
    async function fetchData() {
        let result = null;
    
       try { 
            const response = await fetch('https://reqres.in/api/users?per_page=12');
            result = await response.json();
        } catch (e) {
            console.log(e);
        }
        console.log('-----------');
        console.log('Пункт No1:');
        console.log('-----------');
        console.log(result);
    }
    
    fetchData();
})

//второе задание
const two = document.querySelector('.input-two');

two.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.setAttribute("disabled", "disabled");
    let userData = [];
    fetch('https://reqres.in/api/users?per_page=12') 
      .then ((response) => response.json())
      .then ((response) => {
        userData = response.data;
        console.log('-----------');
        console.log('Пункт No2:');
        console.log('-----------');
        userData.forEach(user => {
            console.log(user.last_name);
        })
    })
})

// третье задание
const three = document.querySelector('.input-three');

three.addEventListener('click', (e) => {  
    e.preventDefault(); 
    e.currentTarget.setAttribute("disabled", "disabled");
    let userData = []; 
    fetch('https://reqres.in/api/users?page=2') 
      .then ((response) => response.json())
      .then ((response) => {
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
// 4-e задание
const four = document.querySelector('.input-four');

four.addEventListener('click', (e) => {  
    e.preventDefault(); 
    e.currentTarget.setAttribute("disabled", "disabled");
    let userData = []; 
    fetch('https://reqres.in/api/users?per_page=12') 
    .then ((response) => response.json())
    .then ((response) => {
        userData = response.data;
    const reduceBasa = userData.reduce((accumulator, item, index, array) => {
        let resString = `${item.first_name} ${item.last_name}`;
        if (index !== array.length - 1) {
          resString += ', ';
        }
        accumulator += resString; 
        
        return accumulator    
    },'')
    console.log('-----------');
    console.log('Пункт No4:');
    console.log('-----------');
    console.log('Наша база содержит данные следующих пользователей:', reduceBasa);
})
})


// // пятое задание
const five = document.querySelector('.input-five');

five.addEventListener('click', (e) => { 
    e.currentTarget.setAttribute("disabled", "disabled");
    e.preventDefault(); 
    let userData = []; 
    fetch('https://reqres.in/api/users?per_page=12') 
    .then ((response) => response.json())
    .then ((response) => {
        userData = response.data;
        const User = userData[0]
        console.log('-----------');
        console.log('Пункт No5:');
        console.log('-----------');
        Object.keys(User).forEach((userKey) => {
          console.log(userKey);
        })
})
})

