// const cookie = document.querySelector("#cookie-clicker");
// const button = document.querySelector("img");
// const counter = document.createElement('p');

// let i=0;
// counter.textContent = i.toString();

// cookie.appendChild(button);
// cookie.appendChild(counter);

// button.addEventListener("click", function () {
//   i++;
//   counter.textContent = i.toString();
// });

const mag = document.querySelector("#magnifying-glass");
const button1 = document.querySelector("#Button1");
const button2 = document.querySelector("#Button2");
const Words = document.createElement("p")


Words.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut. Nunc mattis enim ut tellus elementum sagittis. Tincidunt ornare massa eget egestas purus viverra accumsan in. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Quisque egestas diam in arcu cursus euismod. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Sapien et ligula ullamcorper malesuada proin. Nec feugiat nisl pretium fusce id. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed id semper risus in hendrerit. Diam quis enim lobortis scelerisque. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Nunc lobortis mattis aliquam faucibus purus. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra."
Size = 20;
Words.style.fontSize = Size.toString() + "px";

button1.addEventListener("click", function () {
  Size++;
  Words.style.fontSize = Size.toString() + "px";


});

button2.addEventListener("click", function () {
  Size--;
  Words.style.fontSize = Size.toString() + "px";


});


mag.appendChild(button1);
mag.appendChild(button2);
mag.appendChild(Words);