const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

/*  0-1
if(h1.className === "clickedClass";) {
    h1.className = ""; }
    맨 첫번째는 이거였는데, 이거는 class 자체가 사라져버리는 문제 발생.
    그래서 classList사용. 여기와 관련된 html명령어들이 있음. 
    remove, add, contains 등. 아래가 그 사용임*/

/* 0-2 toggle배우기 전 코드
function handleTitleClick() {
  const clickedClass = "clicked";

  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
} */

/* 0-3 toggle 
토글은 h1의 class List에 clicked class가 이미 있는지 확인해서 없으면
추가하고 있으면 없애공! 0-2랑 똑같애! 걍 한 줄일 뿐임. */
