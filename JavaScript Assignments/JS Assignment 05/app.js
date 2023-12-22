// Chap no:   14 - 17  = Arrays.

// Q no 01:

// let arr = []; //Declaring an array

// arr.push("hammad");
// arr.push('ahmed')
// console.log(arr);

// Q no 02:

// let arr = {
//     names:[]
// };

// arr.names.push("cypher")
// arr.names.push("Case")

// console.log(arr);

// Q no 03:

// let arr = ['Hammad', 'Ahmed', 'Freemasons', 'Illuminati', 'Knight']

// Q no 04:

// let arrNum = [11, 22, 33, 44]

// Q no 05:

// let arrBool = [true, false]

// Q no 06 :

// let arrMix = ['Hammad' , 22 , undefined , true , false , 0.33]

// Q no 07:

// let mobNet = ["Jazz", "ZONG", 'Telenor', 'Warid']

// Q no 08:

// var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]

// document.write(`Qualifications: <br> ${arr[0]} <br> ${arr[1]} <br> ${arr[2]} <br> ${arr[3]} <br> ${arr[4]} <br> ${arr[5]} <br> ${arr[6]} <br> ${arr[7]}`)

// Q no 09:

// var arrEmp = []

// arrEmp.push('Avengers : The Age of Ultron.<br>')
// arrEmp.push('Spectre <br>')
// arrEmp.push('Jurrasic World.')
// document.write(`1) ${arrEmp[0]} 2) ${arrEmp[1]} 3) ${arrEmp[2]}`)
// document.write("<br>" + 'Length of the Array is : ' + arrEmp.length)

// Q no 10:

// var cars = ['Audi', 'RollsRoyce', 'Jaguar', 'Bentley']
// document.write(`<h1>My Favourite Brands of Car: </h1> ${cars} <br> First Index of Array is : 0 <br> Car at the first Index of Array is : ${cars[0]}`)

// Q no 11:

// var studnt = ['Amar', 'Akbar', 'Anthony']
// var score = [320, 350, 450]
// var percAmar = 320 / 500 * 100
// var percAkbar = 350 / 500 * 100
// var percAnthony = 450 / 500 * 100

// document.write(`Score of Amar is : ${score[0]}. Percentage is : ${percAmar}% <br>`)
// document.write(`Score of Akbar is : ${score[1]}. Percentage is : ${percAkbar}% <br>`)
// document.write(`Score of Amar is : ${score[2]}. Percentage is : ${percAnthony}% <br>`)

// My Exercise:

// var arr = []
// var prom = prompt("Enter some value")
// arr.push(prom);
// document.write(arr)


// Q no 12:

// var colors = ['Orange', 'Green', 'Blue', 'White']
// document.write("Original Array: " + colors + "<br>"  + "<br>")

// var userInp = prompt("Which color do you want to add at the beginning?")
// var updated_arr = colors.unshift(userInp)
// document.write("Updated array 1: " + colors + "<br>")

// var userInp2 = prompt("Which color do you want to add at the End?")
// var arr_2nd = colors.push(userInp2)
// document.write("Updated array 2: " + colors + "<br>")

// var userInp3 = prompt("Enter Two Color Names for the beginning.")
// var arr_3rd = colors.unshift(userInp3)
// document.write("Updated array 3: " + colors + "<br>")

// var arr_4th = colors.shift();
// document.write("Updated array 4: " + colors + "<br>")

// var arr_5th = colors.pop();
// document.write("Updated array 5: " + colors + "<br>")

// var userInp4 = +prompt("Which Index do you want to Add color")
// var userColor = prompt("Enter the color name for your index.")
// var arr_6th = colors.splice(userInp4, 0, userColor);
// document.write("Updated array 6: " + colors  + "<br>")

// var userInp5 = +prompt("Which Index do you want to Remove colo r?")
// var colorss = prompt("How many colors you want to delete?")
// var arr_7th = colors.splice(userInp5,colorss);
// document.write("Updated array 7: " + colors)

// if(userInp === "string"){
//     document.write(String)
// }

// Q no 13:

// var score = [320,220,455,123,567,367]
// document.write(`<b>Students Score:</b> ${score} <br>`)
// score.sort();
// document.write(`<b>Ordered Students Score:</b> ${score}`)

// Q no 14:

// var fruits = ["strawberry", "apple", "orange", "banana"];
// document.write(`<b>Fruits: </b> ${fruits} <br>`)
// fruits.sort();
// document.write(`<b>Ordered Fruits: </b> ${fruits} <br>`)

// Q no 15:

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(`<b>Cities List: </b> ${cities} <br>`)
// var slicedArray = cities.slice(1,4) 
// //It takes two parameters: 1-Starting , 2-Ending , both are optional if no parameteres are passed it sliced whole length of an array .
// document.write(`<b>Selected cities List</b>: ${slicedArray}`)

// Q no 16:

// var items = ["Karachi" , "is" , "the" , "city."]
// var $join = items.join(" ");
// document.write($join);

// Q no 17:

// var arr = [];

// arr.push("mouse");
// arr.push("keyboard");
// arr.push("monitor");

// arr.shift();
// arr.shift();
// arr.shift();
// console.log(arr);

// Q no 18:

// var arr = [];

// arr.push("mouse");
// arr.push("keyboard");
// arr.push("monitor");

// const hi = arr.pop(); //Testing.
// arr.pop();
// arr.pop();
// console.log(arr);
// // console.log(hi);

// Q no 19:

// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"]

// document.write(`<select>
// <option>${arr[0]} </option>
// <option>${arr[1]} </option>
// <option>${arr[2]} </option>
// <option>${arr[3]} </option>
// <option>${arr[4]} </option>
// </select>`)

// Q no 20:

// var multi_dimensional = [
//     [
//         [],
//         [],
//         [],        //Declaring and Initialize Multi-Dimensional arrays=Arrays of array.
//     ],
//     [
//         [],
//         [],
//         [],
//     ],
// ]

// Q no 21;

// var arr_multi =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]
// console.log(arr_multi);


//The End-----------------------