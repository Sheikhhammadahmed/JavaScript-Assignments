// Chap no 12 & 13 : if statements / conditional statemnts.

// Q no 01:

// var a = prompt("Enter number")
// if (a % 3 === 0) {
//     document.writeln('Number is Divisible with 3.')
// }
// else{
//     document.write("Number is not divisible with 3.")
// }

// Q no 02:

// var a = prompt("Enter number")
// if (a % 2 === 0) {
//     document.write("Even Number.")
// }
// else {
//     document.write("Odd Number.")
// }

// Q no 04:

// var a = prompt("Enter Name")
// var b = "Hammad"

// if (a === b) {
//     document.write("Assalam o Alaikum !")
// }
// else {
//     document.write(" ")
// }

// Q no 05:

// var a = prompt("Enter Number.")

// switch (a % 3 ) {
//     case 0:
//        console.log("Number is divisible by 3."); 
//        break;
        
//     default:
//         document.write("Number is not Divisible by 3.")
// }


// Q no 07:

// var value1 = +prompt("Enter Value 1");
// var value2 = +prompt("Enter Value 2");
// var opertr = +prompt("Enter Operator");
// var result;

// switch (opertr) {
//     case "+":
//         result = value1 + value2
//         break
//     case "-":
//         result = value1 - value2
//         break
// }

// document.write(result)

// Function to perform the calculation based on the operator
function calculate(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            // Check if the second number is not zero to avoid division by zero
            return number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
        case '%':
            // Check if the second number is not zero to avoid modulus by zero
            return number2 !== 0 ? number1 % number2 : 'Error: Modulus by zero';
        default:
            return 'Error: Invalid operator';
    }
}

// Example usage
const number1 = parseFloat(prompt('Enter the first number:'));
const number2 = parseFloat(prompt('Enter the second number:'));
const operator = prompt('Enter the operator (+, -, *, /, %):');

const result = calculate(number1, number2, operator);

console.log(`Result: ${result}`);


// Q no 08:

// var time = prompt("Enter Time")

// if (time >= '00:00' && time < "12:00") {
//     document.write("Good Morning")
// }
// else if (time >= "12:00" && time < "17:00") {
//     document.write("Good After Noon.")
// }
// else if (time >= "17:00" && time < "21:00") {
//     document.write("Good Evening")
// }
// else if (time >= "21:00" && time < "23:59") {
//     document.write('Good Night')
// }


// Q no 09:

// var year = prompt("Enter Year")

// if (year % 4 === 0) {
//     document.write("Leap Year")
// }

// Q no 10:

// var password = 'sheikhsaab'
// var userInp = prompt("Enter Password")

// if (userInp === "") {
//     document.write("Enter Password Please.")
// }
// else if (userInp === password) {
//     document.write("Correct Password.")
// }
// else {
//     document.write("Wrong Password.")
// }

// Q no 11:

// var firstName = "Ali";
// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// }
// else{
//     document.write("You are not Fahad.")
// }

// Q no 12:

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }

// Q no 13:

// var userInp1 = prompt("Enter Number 1")
// var userInp2 = prompt("Enter Number 2")

// if (userInp1 > userInp2) {
//     document.write(userInp1)
// }
// else if (userInp1 < userInp2) {
//     document.write(userInp2)
// }
// else if (userInp1 === userInp2) {
//     document.write("Both are Equal.")
// }

// Q no 14:

// var userInp = prompt("Enter Number")

// if (userInp > 0) {
//     document.write("Positive.")
// }
// else if (userInp < 0) {
//     document.write("Negative.")
// }
// else if (userInp == 0) {
//     document.write("Zero.")
// }

// Q no 15:

// // Ask the user for the current hour
// const currentHour = prompt("Please enter the current hour (in 24-hour format):");

// // Convert the input to a number
// const hour = parseInt(currentHour);

// // Check the time and provide the appropriate response
// if (hour >= 6 && hour < 9) {
//     console.log("Breakfast is served.");
// } else if (hour >= 11 && hour < 13) {
//     console.log("Time for lunch.");
// } else if (hour >= 17 && hour < 20) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }

// Q no 16:

// var userInp = prompt('Enter Value.')

// if(userInp === null){
//     document.write("undefined.")
// }
// else{
//     var variableType = typeof userInp;

//     if(variableType === "number"){
//         document.write('Integer.')
//     }
//     else if(variableType === "string"){
//         document.write('String.')
//     }
//     else if(variableType === "boolean"){
//         document.write('Boolean.')
//     }
// }

// Q no 17:

// function vowel(char) {
//     char = char.toLowerCase();
//     return ["a", "e", "i", "o", "u"].includes(char);
// }

// // const foo = prompt("Enter Value");
// const result = vowel(foo);
// document.write(result);


// Q no 18:

// var equal = 10 != 8;
// console.log(equal);

// Q no 19:

// var userInp = prompt("Enter the Month.")

// switch (userInp) {
//     case "1":
//         document.write("January.")
//         break
//     case "2":
//         document.write("February.")
//         break
//     case "3":
//         document.write("March.")
//         break
// };

// Q no 20:

// var age = prompt("Enter Age")

// var result = age<=18 ? "Young Enough" : "Old Enough";
// document.write(result);
