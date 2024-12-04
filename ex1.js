const number = 123;
Number(number % 3 ==0||number % 2 ==0||number % 5 ==0) && console.log('1');
Number((number % 2 ==0 && number % 3 ==0)||(number % 2 ==0 && number % 5 ==0)||(number % 5 ==0 && number % 3 ==0)) && console.log('2');
Number(number % 3 ==0 && number % 2 ==0 && number % 5 ==0) && console.log('3');
