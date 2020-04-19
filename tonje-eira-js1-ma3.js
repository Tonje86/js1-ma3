// question 1

const letters = (a, b) => a - b;


// question 2


// question 3

.replace("cats", "giraffes");


// question 4

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

let userId = "7";

if (params.has("userId") < 10) {
    document.location.href = "first.html";
} else if
    (params.has("userId") >= 10) {
    document.location.href = "second.html";
} else {
    document.location.href = "third.html";
}

const baseUrl = "https://my.site.com";
const idUrl = `${baseUrl}?userId=7`;


// question 5

const containerButton = document.querySelector(".container");
const button = document.querySelector(".btn");
containerButton.removeChild(button);


// question 6

const newLi = document.createElement("li");
const elephantLi = document.querySelector(".elephants");

newLi.className = "parrots";

newLi.appendChild(document.createTextNode("Parrot"));

document.querySelector("ul").insertBefore(newLi, elephantLi);


// question 7
