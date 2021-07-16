// function createPromise () {
//     const matches = new Promise((resolve, reject) => {
//         const arr = [
//             {
//                 game: "Liverpool vs Sunderland",
//                 oneX: 1.23,
//                 twox: 7.23
//             },
//             {
//                 game: "Man utd vs Mancity",
//                 oneX: 2.00,
//                 twox: 2.23
//             },
//             {
//                 game: "Chelsea vs Everton",
//                 oneX: 1.12,
//                 twox: 2.85
//             }
//         ]

//         resolve(arr)
//     })
// }

const outputs = document.getElementById("outputs");

const matches = new Promise((resolve, reject) => {
  const arr = [
    {
      game: "Liverpool vs Sunderland",
      oneX: 1.23,
      twox: 7.23
    },
    {
      game: "Man utd vs Mancity",
      oneX: 2.0,
      twox: 2.23
    },
    {
      game: "Chelsea vs Everton",
      oneX: 1.12,
      twox: 2.85
    }
  ];

  //   throw Error();

  resolve(arr);
});

// console.log(matches);

// matches
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//     console.log("Something went wrong while tring to get matches");
//   });

// Arrow functions equivalent
// const getPromiseData = async () => {};

async function getPromiseData() {
  try {
    const results = await matches;

    console.log(results);
  } catch (err) {
    console.log(err);
    console.log("Something went wrong while tring to get matches");
  }
}

// getPromiseData();

// https://api.genderize.io/?name=scott
// http://universities.hipolabs.com/search?country=United+States

const getUni = async (country) => {
  try {
    // const response = await fetch(
    //   `http://universities.hipolabs.com/search?country=${country}`
    // );

    // http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber

    // const response = await fetch(
    //   `https://cors.bridged.cc/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ng&f_has_lyrics=1&apikey=9e473b90400baaab486ae95201c8da8f`
    // );

    const response = await fetch(
      `https://cors.bridged.cc/http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&apikey=9e473b90400baaab486ae95201c8da8f`
    );

    // console.log(response);
    const data = await response.json();
    // console.log(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// getUni();

const me = () => {
  const arr = [
    {
      game: "Liverpool vs Sunderland",
      oneX: 1.23,
      twox: 7.23
    },
    {
      game: "Man utd vs Mancity",
      oneX: 2.0,
      twox: 2.23
    },
    {
      game: "Chelsea vs Everton",
      oneX: 1.12,
      twox: 2.85
    }
  ];

  arr.forEach((ar) => {
    const newDiv = document.createElement("");
    newDiv.innerHTML = ar.game;

    outputs.appendChild(newDiv);
  });
};

me();
