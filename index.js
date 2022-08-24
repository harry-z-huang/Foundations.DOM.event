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

// const mag = document.querySelector("#magnifying-glass");
// const button1 = document.querySelector("#Button1");
// const button2 = document.querySelector("#Button2");
// const Words = document.createElement("p")


// Words.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut. Nunc mattis enim ut tellus elementum sagittis. Tincidunt ornare massa eget egestas purus viverra accumsan in. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Quisque egestas diam in arcu cursus euismod. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Sapien et ligula ullamcorper malesuada proin. Nec feugiat nisl pretium fusce id. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed id semper risus in hendrerit. Diam quis enim lobortis scelerisque. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Nunc lobortis mattis aliquam faucibus purus. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra."
// Size = 20;
// Words.style.fontSize = Size.toString() + "px";

// button1.addEventListener("click", function () {
//   Size++;
//   Words.style.fontSize = Size.toString() + "px";


// });

// button2.addEventListener("click", function() {
//   Size--;
//   Words.style.fontSize = Size.toString() + "px";


// });


// mag.appendChild(button1);
// mag.appendChild(button2);
// mag.appendChild(Words);

// const game = document.querySelector("#crane-game");
// const button_up = document.querySelector("#up"); //increments up variable
// const button_down = document.querySelector("#down"); //decrements up variable
// const button_left = document.querySelector("#left"); //increments left variable
// const button_right = document.querySelector("#right"); //decrements left variable
// const image = document.createElement('img')

// image.src = "/crane.jpg"
// image.style.width = '15em'
// image.style.height = '15em'
// image.style.position = 'relative'
// game.appendChild(image);

// //Default values for position:absolute of image
// up = 10;
// left = 10;
// image.style.top = up.toString() + "em";
// image.style.left = left.toString() + "em";

// button_up.addEventListener("click", function () {
//     if (up > 0) {
//         up--;
//     }
//     image.style.top = up.toString() + "em"
// })

// button_down.addEventListener("click", function () {
//     if (up < 100) {
//         up++
//     }
//     image.style.top = up.toString() + "em"
// })

// button_left.addEventListener("click", function () {
//     if (left > 0) {
//         left--;
//     }
//     image.style.left = left.toString() + "em"
// })

// button_right.addEventListener("click", function () {
//     if (left < 100) {
//         left++;
//     }
//     image.style.left = left.toString() + "em";
// })


/////////// Green screen

const screen = document.querySelector("#green-screen");

// html tag looks like this: <input type="color"></input>
var input = document.createElement("input");
input.setAttribute("type", "text");
const gs_button= document.querySelector("#gs_button");

screen.appendChild(input);

//  document.body.style.backgroundColor = input;

 gs_button.addEventListener("click", function () {
  x = document.querySelector("input").value  
  document.body.style.backgroundColor = x;
})

screen.appendChild(gs_button);