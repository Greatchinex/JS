// Get Html elements
const inputField = document.getElementById("artist");
const buttons = document.getElementById("my_button");
const nothing = document.getElementById("nothing");
const names = document.getElementById("name");

buttons.addEventListener("click", makeRequest);

console.log(inputField);
console.log(buttons);

// http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&apikey=9e473b90400baaab486ae95201c8da8f

const BASE_URL = "http://api.musixmatch.com/ws/1.1";
const API_KEY = "9e473b90400baaab486ae95201c8da8f";
const CORS = "https://cors.bridged.cc";

// track.search?q_artist=justin bieber&apikey=9e473b90400baaab486ae95201c8da8f

async function makeRequest() {
  let value = inputField.value;
  console.log("A button was Clicked");

  // null, undefined, empty string, false, 0

  // Null checks to make sure user enters a value
  if (!value) {
    alert("Please enter a value");
    return;
  }

  // Api Call
  const url = `${CORS}/${BASE_URL}/track.search?q_artist=${value}&f_has_lyrics=1&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.message.body.track_list;

    // console.log(result);
    // Handle if no data was found
    if (result.length === 0) {
      nothing.innerHTML = "Cannot find music for artist you entered";
    } else {
      // loop through data from api request
      result.forEach((single) => {
        console.log(single.track.track_name);
        // Create a new element
        const newElements = document.createElement("div");
        // Assign track name from Api to the element created above
        newElements.innerHTML = single.track.track_name;

        // Insert the "div" created above to "name" div on our html file
        names.appendChild(newElements);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

// arr.forEach((ar) => {
//     const newDiv = document.createElement("");
//     newDiv.innerHTML = ar.game;

//     outputs.appendChild(newDiv);
//   });
