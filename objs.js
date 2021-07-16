const frank = {
  age: 25,
  names: "another",
  profession: "Drummer",
  grades: {
    maths: "A",
    chemistry: "C",
    school: {
      primary: {
        1: "Faith Foundation",
        2: "Projaro"
      }
    }
  }
};

console.log(
  `My name is ${frank.names} and i am ${frank.age} years old, Professionally i am a ${frank.profession}`
);
console.log(
  `In maths i scored an ${frank.grades.maths} while in chemistry i score a ${frank.grades.chemistry}`
);

const {
  age,
  names,
  grades: {
    school: {
      primary: { names2, names3 }
    }
  }
} = {
  age: 25,
  names: "another",
  profession: "Drummer",
  grades: {
    maths: "A",
    chemistry: "C",
    school: {
      primary: {
        names2: "Faith Foundation",
        names3: "Projaro"
      }
    }
  }
};

console.log(age);
console.log(names2);
console.log(names3);

const me = [4, 5, frank];
//  ARRAYS
const arr1 = [6, 5, "abs", null, frank, me];

// console.log(arr1);

// arr1.map((single) => {
//   console.log("We Are Looping");
//   //   console.log(single);
//   console.log(typeof single);
//   console.log("End of loop cycle");
//   //   console.log(single.names);
//   if (typeof single === "object" && single !== null) {
//     console.log(single.names);
//   }
// });

const score = 50;

switch (true) {
  case score > 50:
    console.log(score);
    break;
}

// console.log(arr1);
// console.log(arr1.length);

// if (arr1.length > 4) {
//   console.log(`This length is ${arr1.length}`);
// } else {
//   console.log("Array Values is greater tha 0");
// }

// console.log("======PUSH 1======");
// arr1.push(9);
// console.log(arr1);
// console.log("======UNSHIFT======");
// arr1.unshift("Okey");
// console.log(arr1);
// console.log("======PUSH 2======");
// arr1.push("Another Thing");
// console.log(arr1);
// console.log("======POP======");
// arr1.pop();
// console.log(arr1);
// console.log("======SHIFT======");
// arr1.shift();
// console.log(arr1);
