//1. 사용자가 설정(제한)한 값 가져오기
//2. prevent Default  이용해서 실시간으로 범위 업데이트 하는거 가져오는법 알기
//3. 유저가 숫자 선택 안하고 play 누르면 경고창 띄우기
//4. 제한값 이하의 숫자 선택해서 play 누르면 hidden
//삭제 후 성공 여부 알려주기!

const select = document.querySelector(".select");
const playingSpan = document.querySelector(".playing");
const playNumber = document.querySelector(".playnumber");
const playForm = document.querySelector(".playform");
const lost = document.querySelector(".lost");
const won = document.querySelector(".won");
const HIDDEN_CLASSNAME = "hidden";

function selectEvent() {
  localStorage.setItem("selecting", select.value);
}

function playEvent(event) {
  localStorage.setItem("playing", playNumber.value);
  const selecNum = localStorage.getItem("selecting");
  const playNum = localStorage.getItem("playing");
  const randomNum = Math.round(Math.random() * selecNum);
  event.preventDefault();
  if (selecNum === "" || selecNum === undefined) {
    alert("숫자 범위를 지정해주세요.");
    hiddenSpan();
  } else if (playNum === undefined || playNum === "") {
    alert("숫자를 선택해주세요.");
    hiddenSpan();
  } else if (parseInt(selecNum) < parseInt(playNum)) {
    alert("숫자 범위 이하의 수를 선택해 주세요.");
    hiddenSpan();
  } else {
    playingSpan.innerText = `You chose : ${playNum} the machin chose: ${randomNum}`;
    playingSpan.classList.remove(HIDDEN_CLASSNAME);
  }
  if (parseInt(playNum) === parseInt(randomNum)) {
    won.classList.remove(HIDDEN_CLASSNAME);
    lost.classList.add(HIDDEN_CLASSNAME);
  } else if (
    parseInt(playNum) < parseInt(randomNum) ||
    parseInt(playNum) > parseInt(randomNum)
  ) {
    won.classList.add(HIDDEN_CLASSNAME);
    lost.classList.remove(HIDDEN_CLASSNAME);
  } else {
    won.classList.add(HIDDEN_CLASSNAME);
    lost.classList.add(HIDDEN_CLASSNAME);
  }
}

function hiddenSpan() {
  won.classList.add(HIDDEN_CLASSNAME);
  lost.classList.add(HIDDEN_CLASSNAME);
}

playForm.addEventListener("submit", playEvent);
select.addEventListener("input", selectEvent);
