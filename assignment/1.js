// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const hello = document.querySelector("h2");

const superEventHandler = {
  mouseEnter: function () {
    hello.innerText = "The mouse is here!";
    hello.style.color = colors[0];
  },
  mouseLeave: function () {
    hello.innerText = "The mouse is gone!";
    hello.style.color = colors[1];
  },
  reSize: function () {
    hello.innerText = "You just resized!";
    hello.style.color = colors[2];
  },
  conTextMenu: function () {
    hello.innerText = "That was a right click!";
    hello.style.color = colors[3];
  },
};

hello.addEventListener("mouseenter", superEventHandler.mouseEnter);
hello.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.reSize);
window.addEventListener("contextmenu", superEventHandler.conTextMenu);
