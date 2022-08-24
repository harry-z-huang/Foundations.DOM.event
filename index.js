const cookie = document.querySelector("#cookie-clicker");
const button = document.querySelector("button");
const counter = document.createElement('p');

let i=0;
counter.textContent = i.toString();

cookie.appendChild(button);
cookie.appendChild(counter);

button.addEventListener("click", function () {
  i++;
});

