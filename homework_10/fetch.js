'use strict';
// код для выполнения пункта 1
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

// код для выполнения пункта 2
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
    
// код для выполнения пункта 3

        userData = userData.filter(user => (user.last_name[0] === 'F'))
        console.log('-----------');
        console.log('Пункт No3:');
        console.log('-----------');
        userData.forEach((user) => {
            console.log(user.last_name, user.first_name, user.email, user.id, user.avatar);
        })
   
// код для выполнения пункта 4

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

// код для выполнения пункта 5

    const User = userData[0]
    console.log('-----------');
    console.log('Пункт No5:');
    console.log('-----------');
    Object.keys(User).forEach((userKey) => {
    console.log(userKey);
    })
})

