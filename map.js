
var numbers = [1,2,3,4,5];
var squareNumbers = numbers.map(function(x){
    return x*x;
});
console.log(squareNumbers); 

var number = [5,8,22,58,47,4,98];
var newNumbers = number.filter(function(y){
    return y>10;
});
console.log(newNumbers);