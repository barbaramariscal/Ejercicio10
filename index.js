console.log('Hola');

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log('number', number);

const numPares = number.filter(function(num){
    return num % 2 == 0;
});
console.log(numPares);

const numImpares = number.filter(function(num){
    return num % 2 != 0;
});
console.log(numImpares);