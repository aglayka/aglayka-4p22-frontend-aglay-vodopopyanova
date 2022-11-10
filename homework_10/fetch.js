'use strict';

let userData = [];
let userFilter = [];

// код для выполнения пункта 1
  
fetch('https://reqres.in/api/users?per_page=12')

.then ((response) => response.json())
.then ((response) => {
    userData = response.data;
    console.log('-----------');
    console.log('Пункт No1:');
    console.log('-----------');
    console.log(response);

    // код для выполнения пункта 2  

    console.log('-----------');
    console.log('Пункт No2:');
    console.log('-----------');
    userData.forEach(user => {
        console.log(user.last_name);
    })
    
    // код для выполнения пункта 3
       
    userFilter = userData.filter(user => (user.last_name[0] === 'F'))
    console.log('-----------');
    console.log('Пункт No3:');
    console.log('-----------');
    userFilter.forEach((user) => {
        console.log(user.last_name, user.first_name, user.email, user.id, user.avatar);
    })
   
    // код для выполнения пункта 4
     
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

    // код для выполнения пункта 5

    const objUsers = userData[0]
    console.log('-----------');
    console.log('Пункт No5:');
    console.log('-----------');
    Object.keys(objUsers).forEach((usersKey) => {
        console.log(usersKey);
    })
})

