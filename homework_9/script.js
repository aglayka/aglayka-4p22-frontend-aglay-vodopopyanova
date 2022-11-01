'use strict';

function makeFibonacciFunction() {
   // реализация функции-помощника
   let a = 0
   let b = 1
   
   console.log(a);
   console.log(b);

   const btn = document.querySelector('.button');
   
   btn.addEventListener('click', function () {
           let c = a + b
           document.querySelector('.res').innerHTML = c;
           a = b;
           b = c;
         return console.log(c)
   })
};

 // Вывод в консоль
 const fibonacci = makeFibonacciFunction();

 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 
 console.log(fibonacci()); 