// Function declaration and function Expression (Declaring a function)
// Calling a function
// Passing parameters to a function
// return statement
// * Immediately Invoked Function Expression (I.I.F.E)
// * Async Javascript

// Function declaration
function logOutStudents() {
  console.log("Call one");
  console.log("Call Two");
}

// Function expression
const logOutStudents2 = function () {
  console.log("Function Expression");
};

// Arrow functions
const logOutStudents3 = () => {
  console.log("Arrow Functions");
};

// Call function
// logOutStudents();
// logOutStudents2();
// logOutStudents3();

const addTwoNumbers = (num1, num2) => {
  //   if (typeof num1 !== "number" || typeof num2 !== "number") {
  //     console.log("Invalid");

  //     return;
  //   }

  const result = num1 + num2;

  return result;

  //   console.log(result);
};

const multiplyTwoNumbers = (num1, num2) => {
  const result = num1 * num2;

  return result;
};

// const output = addTwoNumbers(15, 15) - multiplyTwoNumbers(2, 2);
// console.log(output);

// const anything = (name) => {
//   return {
//     message: `My name is ${name}`,
//     success: true
//   };
// };

// const outputs = anything("Victor");
// console.log(outputs);
// console.log(outputs.message);

// const data1 = addTwoNumbers(4, 5);
// const data2 = multiplyTwoNumbers(10, 7);

// console.log("====DATA1====");
// console.log(data1);
// console.log("====DATA2====");
// console.log(data2);

const projaroStudents = () => {
  const students = [
    { name: "Victor", course: "Javascript" },
    { name: "Frank", course: "Javascript" },
    { name: "Okey", course: "Javascript" },
    { name: "Samuel", course: "Javascript" }
  ];

  const me = "me";

  return students;
};

const myOutput = projaroStudents();
// console.log(myOutput);

// myOutput.forEach((single) => {
//   console.log(single);
// });

// Declare a variable and assign an empty array
// Log out the array
// declare a function and call it "createUser"
// the function should have the following parameters (name, email, password, phone_number)
// inside the function create an object and assign it to a variable called user
/***
 * Inside the object created above add key value pairs for the function parameters
 *
 */
// Then add the object called user to the array created earlier
/***
 * Then assign another object as the output of the "createUser" function, Which should have a
 * structure like { message: "User created", value: true  }
 */
// Call the "createUser" function and pass all the function parameters then assign it to a variable..
// Log out the variable
// Log out the initial array created again

const user1 = {
  full_name: "myself",
  email: "me@m2.com",
  password: "password",
  phone_number: "09181822222"
};

const emptyArray = [];

emptyArray.push(user1);

console.log(emptyArray);

const createUser = (name, email, password, phone_number) => {
  const user = {
    full_name: name,
    email: email,
    password: password,
    phone_number: phone_number
  };

  // Before you push "user" object above into the array perform a check
  // check the email that is being passed in the function parameter
  // Check if the email is already in the array above. If it is
  // return output { message: "User with email already exist", value: false }
  // DO NOT USE IF ELSE....

  emptyArray.push(user);

  return {
    message: "User created",
    value: true
  };
};

const data2 = createUser("Chinex", "me@m2.com", "12345678", "08122738393");
console.log(data2);
console.log(emptyArray);

console.log("First console log");
setTimeout(() => {
  console.log("Second console log");
}, 5000);
console.log("Third console log");
setTimeout(() => {
  console.log("Fourth console log");
}, 1000);
console.log("Fifth console log");
