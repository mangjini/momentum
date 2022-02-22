document.title = "Hello! From JS!";
const title = document.getElementById("title");
console.dir(title);
title.innerText = "got you!";
console.log(title.id);
console.log(title.className);

// new chapter
const mangjis = document.getElementsByClassName("mangji");
console.log(mangjis);

const mangs = document.getElementsByTagName("h1");

const mang = document.querySelector(".mangmo h1");
console.log(mang);

// .mangmo의 h1이 여러개일 때, query selector는 첫번째 element만 가져온다.
// 다 가져오고 싶으면 quertSelectorAll을 사용하세용.
// query selcetor 안에 .mangmo:first-child h1 같이  css 에서 사용하는 거
// 쌉가눙.

//// new chapter

mang.style.color = "tomato";

const hello = document.querySelector(".title:first-child h1");

console.log(hello);

//이거 왜 안되지?
