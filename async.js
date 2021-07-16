// https://api.genderize.io/?name=scott
// https://fakerapi.it/api/v1/users
// https://randomuser.me/api/
// http://universities.hipolabs.com/search?country=United+States

/***
 * A promise is an object that may produce a single value some time in the future :
 * either a resolved value, or a reason that it's not resolved (e.g., a network error occurred).
 * Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
 *
 *
 */

const inputVal = document.getElementById("myInput");
const button = document.getElementById("buttons");
const outputs = document.getElementById("outputs");

button.addEventListener("click", getInputValue);

const baseurl = "https://api.genderize.io";

const fetchData = async () => {
  //   const data = await fetch(
  //     "http://universities.hipolabs.com/search?country=Nigeria"
  //   );

  //   console.log(data);
  //   const result = await data.json();
  //   console.log(result);

  const numbers = new Promise((resolve, reject) => {
    resolve([1, 2, 4]);
  });

  console.log(numbers);
  numbers.then((data) => console.log(data));
};

// fetchData();

async function getInputValue() {
  const inputField = inputVal.value;

  //   if (!inputField) {
  //     alert("Please enter a value");
  //     return;
  //   }

  const request = `${baseurl}/?name=${inputField}`;

  const data = await fetch(request);

  console.log(data);
  const finalValue = await data.json();
  console.log(finalValue);

  outputs.innerHTML = `This name is most likely a ${finalValue.gender}`;
}
