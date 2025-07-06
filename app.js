// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let number1 = +prompt("Enter the first number:");
// let number2 = +prompt("Enter the second number:");
// let result = number1 + number2;
// document.writeln("The sum is  of "+ number1, " and ", number2 , " is "  + result);









// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// let number1 = +prompt("Enter the first number:");
// let number2 = +prompt("Enter the second number:");


        // Subtraction
// let difference = number1 - number2;
// document.writeln("The difference of " + number1 + " and " + number2 + " is " + difference + "<br>");

//       // Multiplication
// // let product = number1 * number2;
// document.writeln("The product of " + number1 + " and " + number2 + " is " + product + "<br>");

// //       // Division
// let quotient = number1 / number2;
// document.writeln("The quotient of " + number1 + " and " + number2 + " is " + quotient + "<br>");

// //        // Modulus
// // let remainder = number1 % number2;
// document.writeln("The remainder of " + number1 + " divided by " + number2 + " is " + remainder);








// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
// let number;

// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.writeln("Value after variable declaration is: " + number + "<br>");

// // c. Initialize the variable with some number.
// number = 5;

// // d. Show the value of variable in your browser like “Initial value: 5”.
// document.writeln("Initial value: " + number + "<br>");

// // e. Increment the variable.
// number++;

// // f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.writeln("Value after increment is: " + number + "<br>");

// // g. Add 7 to the variable.
// number = number + 7;

// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.writeln("Value after addition is: " + number + "<br>");

// // i. Decrement the variable.
// number--;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.writeln("Value after decrement is: " + number + "<br>");

// // k. Show the remainder after dividing the variable’s value by 3.
// let remainder = number % 3;

// // l. Output : “The remainder is : 0”.
// document.writeln("The remainder is: " + remainder);






// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. 
// Example output:

// let ticketPrice = 600;
// let totalTickets = 5;
// let totalCost = ticketPrice * totalTickets;

// document.writeln("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR");






// 5. Write a script to display multiplication table of any number in your browser.

// let number = +prompt("Enter a number to show its multiplication table:");

// document.writeln("Multiplication Table of " + number );

// for (let i = 1; i <= 10; i++) {
//   document.writeln(number + " X " + i + " = " + (number * i) + "<br>");
// }






// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

let fahrenheitValue = 70;
let celsiusValue = (fahrenheitValue - 32) * 5/9;
console.log(fahrenheitValue + "°F is " + celsiusValue + "°C");









// 7. Shopping Cart Checkout Program

// a. Price of item 1
// let item1Price = 650;

// // b. Price of item 2
// let item2Price = 100;

// // c. Ordered quantity of item 1
// let item1Quantity = 3;

// // d. Ordered quantity of item 2
// let item2Quantity = 7;

// // e. Shipping charges
// let shippingCharges = 100;

// // Calculate total cost
// let totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// // Show receipt
// document.writeln("<h3>Shopping Cart</h3>");
// document.writeln("Price of item 1 is " + item1Price + "<br>");
// document.writeln("Quantity of item 1 is " + item1Quantity + "<br>");
// document.writeln("Price of item 2 is " + item2Price + "<br>");
// document.writeln("Quantity of item 2 is " + item2Quantity + "<br>");
// document.writeln("Shipping Charges " + shippingCharges + "<br><br>");
// document.writeln("Total cost of your order is " + totalCost + " PKR");







// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// let totalMarks = 500;
// let marksObtained = 420;

// let percentage = (marksObtained / totalMarks) * 100;

// document.writeln("<h3>Marks Sheet</h3>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage + "%");







// 9. Currency Converter
// Assume 10 US dollars & 25 Saudi Riyals
// Exchange rates: 1 USD = 104.80 PKR, 1 Riyal = 28 PKR
// Show result in browser

// let totalPKR = (10 * 104.80) + (25 * 28);

// document.writeln("<h3>Currency in PKR</h3>");
// document.writeln("Total Currency in PKR: " + totalPKR);





// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let number = 10; 

// let result = ((number + 5) * 10) / 2;

// document.writeln("<h3>Arithmetic Operations</h3>");
// document.writeln("Initial number: " + number + "<br>");
// document.writeln("Result after calculations: " + result);










// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.


// let currentYear = 2025;


// let birthYear = 2008;


// let age1 = currentYear - birthYear;        
// let age2 = age1 - 1;                        

// document.writeln("<h3>Age Calculator</h3>");
// document.writeln("Current Year: " + currentYear + "<br>");
// document.writeln("Birth Year: " + birthYear + "<br>");
// document.writeln("They are either " + age2 + " or " + age1 + " years old.");





// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radius = 20;


// let pi = 3.142;

// let circumference = 2 * pi * radius;
// document.writeln("The circumference is " + circumference + "<br>");

// let area = pi * radius * radius;
// document.writeln("The area is " + area);






// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let favoriteSnack = "Chocolate Chip Cookies";
// let currentAge = 20;
// let maxAge = 80;
// let amountPerDay = 2;
// let yearsRemaining = maxAge - currentAge;
// let totalSnacks = yearsRemaining * 365 * amountPerDay;

// document.writeln("<h3>The Lifetime Supply Calculator</h3>");
// document.writeln("Favorite Snack: " + favoriteSnack + "<br>");
// document.writeln("Current Age: " + currentAge + "<br>");
// document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
// document.writeln("Amount of snacks per day: " + amountPerDay + "<br>");
// document.writeln("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");











