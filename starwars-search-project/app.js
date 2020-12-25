let button = document.querySelector("#button");
let redirButton = document.getElementById("redirbutt");
let api = "https://swapi.dev/api/people/?search=";
let logo = document.querySelector(".logo");
const apiStarShip = "https://swapi.dev/api/starships/?search=";
const apiPlanets = "https://swapi.dev/api/planets/?search=";
let dat = document.querySelector(".data");
let input = document.querySelector("input");
let html = window.location.href;
var file = html.substring(html.lastIndexOf("/") + 1);
const resultCon = document.getElementById("res");

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
  if (usrinput === "") {
    usrinput = undefined;
  } else {
    usrinput = document.querySelector("input").value;
  }
  //get the data from the api based on what the user searched for
  const { data } = await axios.get(api + usrinput);

  //destructure the object
  const {
    results: [fData],
  } = data;
  console.log(fData);
  //call the display function.
  display(fData);
  resultCon.classList.add("rescontainer");
  smooth(dat);
}
function smooth(button) {
  button.scrollIntoView({ block: "center", behavior: "smooth" });
}
//displays the data
function display(data) {
  dat.innerHTML = "";
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
const redir = () => {
  smooth(logo);
  dat.innerText = "";
  resultCon.classList.toggle("rescontainer");
};

button.addEventListener("click", req);
redirButton.addEventListener("click", redir);
