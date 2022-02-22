const h1 = document.querySelector("div.hello:first-child h1");

//이벤트를 찾고 싶다면 dir 을 활용하자.
//on 뒤에 붙은 것이 사용가능한 event임.

console.dir(h1);
console.log(h1);

function handleTitleClick() {
  h1.style.color = "tomato";
  console.log("h1 was clicked!");
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "blue";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOODami");
}

h1.addEventListener("click", handleTitleClick);
//h1.onclick = handleTitleClick;으로 바꿀 수 있음.

h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = hadndleMouseEnter; -마찬가지임
h1.addEventListener("mouseleave", handleMouseLeave);

//하지만 .removeEventListener를 통해 이벤트 없앨 수 있으므로 주석처리 하지 않은 코드를 더 추천함.

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
