const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = (input) => {
    
    if (!numberInput.value || isNaN(parseInt(numberInput.value))){
        alert("Please provide a decimal number");
        return 
    }
    result.textContent = decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "" // to empty the input field
}

//Using Loop
/*const decimalToBinary = (input) => {
    let binary = "";
    if (input === 0) {
        binary = "0";
    }
    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }
    result.innerText = binary;
};*/

//Using Recursion
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
      } 
    else {
      return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
}

convertBtn.addEventListener("click", checkUserInput)
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput()
    }
})

/*const binaryArray = [];
const binaryConverter = (n) => {
    if(n === 0){
        return [];
    }else{
        binaryConverter(~~(n/2)) // getting the quotient of the dividend
        binaryArray.push(n%2) // getting the reminder
        return binaryArray; 
    }
}
console.log(binaryConverter(118))*/
