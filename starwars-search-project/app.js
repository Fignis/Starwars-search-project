let button = document.querySelector("#button");
let plButton = document.querySelector("#button2");
let stButton = document.querySelector("#button3");
let api = "https://swapi.dev/api/people/?search=";
const apiStarShip = "https://swapi.dev/api/starships/?search=";
const apiPlanets = "https://swapi.dev/api/planets/?search=";
let dat = document.querySelector(".data");
let input = document.querySelector("input");
let html = window.location.href;
var file = html.substring(html.lastIndexOf("/") + 1);

//function to get the data and destructure the data
console.log(file);
if (file == "starship.html") {
  api = apiStarShip;
} else if (file == "planet.html") {
  api = apiPlanets;
}
async function req() {
  //get userinput value
  let usrinput = document.querySelector("input").value;
  //get the data from the api based on what the user searched for
  const { data } = await axios.get(api + usrinput);

  //destructure the object
  const {
    results: [fData],
  } = data;
  console.log(fData);
  //call the display function.
  display(fData);
}

//displays the data
function display(data) {
  //transform the recieved data from an object to an associative array of rows and entries
  const entries = Object.entries(data);
  //destructure the array into something that is iterable for the "for of loop";
  for (const [row, entry] of entries) {
    //insert into the div of data
    JSON.stringify(row);
    JSON.stringify(entry);
    dat.innerHTML += `
   <p>${row.toUpperCase()}: ${entry}</p> 
   `;
  }
}
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    button.click();
  }
});

button.addEventListener("click", req);
