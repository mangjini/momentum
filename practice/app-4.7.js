/*

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

*/

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
/* input submit 으로 대체. 불필요 .
const loginButton = document.querySelector(".login-form button"); 
loginButton.addEventListener("click", LoginBtnClick);


function LoginBtnClick() {
  const userName = loginInput.value;
  if (userName === "") {
    alert("please write your name");
  } else if (userName.length > 15) {
    alert("your name is too long.");
  }
}
*/

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //console.log(event);
  //아래와 같음 greeting.innerText = "Hello " + userName;
  paintGreetings(userName);
}

/* preventDefault 연습
function handleLinkClik(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
} */

//link.addEventListener("click", handleLinkClik); //

function paintGreetings(userName) {
  greeting.innerText = `hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
