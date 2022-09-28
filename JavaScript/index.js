//vARIABLES
//Cannot be a reserved keyword
//Should be meaningfull
//Cannot start with number (1number)
//Cannot contain a space or hyphen
//Case sensitive

const firstName = 'Lucca';// string Literal
let age = 27; // Number Literal
let isApproved = false; //Boolean Literal
let lastName = undefined;  // Not very common as is the default value of a variable
let selectedColor = null; //used to clear values of a variable

let person = {
    name:'Lucca',
    age: 30
};

// Dot Notation
person.name = 'Justin'; //Cleaner and easier 

//Bracket Notation
let selection = 'name';
person[selection] = 'Nathan';



let selectedDays = ['Wednesday', 'Thursday', 'Friday'];
selectedDays[3] = 'Saturday';

console.log(selectedDays.length);


//Functions are a set of statements that either perform a task or returns a value. A real application is an agglomerated of hundreds of functions 


//Performing a task
function greet(name, lastName){ //name is a parameter 
    console.log('Hello '+ name + ' ' + lastName);
}

greet('My', 'Friend'); // 'My' is an argument for the parameter 'name'

//Calcuating a value
function square(number){ 
   return number * number;
}

let number = square(2);
console.log(number);

console.log(square(3));




