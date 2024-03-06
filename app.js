const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
    console.log(numberInput.value);
}
convertBtn.addEventListener("click", checkUserInput)
numberInput.addEventListener("keydown", () => {
    
})
/*
const binaryArray = [];
const binaryConverter = (n) => {
    if(n === 0){
        return [];
    }else{
        binaryConverter(~~(n/2)) // getting the quotient of the dividend
        binaryArray.push(n%2) // getting the reminder
        return binaryArray.toString();
    }
}
console.log(binaryConverter(150))
*/