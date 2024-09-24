/*console.log("Enter the Number : ");
let a = prompt();
if(a % 2 == 0){
    console.log ('Your Number is Even : ');
}else{
    console.log ('Your Number is Odd :');
}*/

function larger(num1 , num2) {
   /* if(num1 > 2){
        return num1;
    }else{
        return num2;
    }*/
    return num1 > num2 ? num1 : num2;
}
console.log(larger(4,9));

// Converter Fahrenheit to Celsius;

function converter(C) {
    return (1.8)*C+32;
}
console.log(converter(32));


// Converter C to F

function Con(F) {
    return (F-32)/1.8;
    
}
console.log(Con(109.4))