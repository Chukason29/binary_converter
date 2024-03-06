"use strict"
const binaryArray = [];
const binaryConverter = (n) => {
    if(n === 0){
        return []
    }else{
        binaryConverter(~~(n/2)) // getting the quotient of the dividend
        binaryArray.push(n%2) // getting the reminder
        return binaryArray;
    }
}
console.log(binaryConverter(15));
