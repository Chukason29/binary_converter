const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = (input) => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))){
        alert("Please provide a decimal number");
        return 
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "" // to empty the input field
    const inputs = []
    const quotients = []
    const remainders = []
    
    while (input > 0) {
        let quotient = Math.floor(input / 2);
        let remainder = input % 2;
        input = quotient;
        inputs.push(input);
    }
}
const decimalToBinary = () => {

}
convertBtn.addEventListener("click", checkUserInput)
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
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