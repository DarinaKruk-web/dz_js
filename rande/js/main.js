let firstNumber = prompt("Enter first number : ");
let secondNumber = prompt("Enter second number : ");
if(firstNumber>secondNumber){
    let i=firstNumber;
    firstNumber=secondNumber;
    secondNumber=i;
}
console.log(`Numbers in the rande : ${firstNumber} - ${secondNumber}`);
for(let i=firstNumber; i<=secondNumber;i++){
    console.log(i);
}
console.log(`Even numbers : ${firstNumber} - ${secondNumber}`);
for(let i=firstNumber; i<=secondNumber;i++){
    if(i%2===0){
        console.log(i);
    }
}
console.log(`Odd numbers in the range : ${firstNumber} - ${secondNumber}`);
for(let i=firstNumber; i<=secondNumber;i++){
    if(i%2!==0){
        console.log(i);
    }
}
console.log(`Mumbers multiples of 7 : ${firstNumber} - ${secondNumber}`);
for(let i=firstNumber; i<=secondNumber;i++){
    if(i%7===0){
        console.log(i);
    }
}
