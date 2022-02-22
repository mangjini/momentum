const quotes = [
  {
    quote:
      "그대 자신의 영혼을 탐구하라.다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요,  그대 혼자 가야할 길임을 명심하라.  비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라.",
    author: "인디언 속담",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
    author: "헬렌켈러",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다",
    author: "발타사르 그라시안",
  },
  {
    quote:
      "지금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다 오늘 그것을 못하면 내일 그것을 할수있는가",
    author: "토마스 아켐피스",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다. ",
    author: "메이벨 뉴컴버",
  },
  {
    quote:
      "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
    author: "베토벤",
  },
  {
    quote:
      "직접 눈으로 본 일도 오히려 참인지 아닌지 염려스러운데 더구나 등뒤에서 남이 말하는 것이야 어찌 이것을 깊이 믿을 수 있으랴? ",
    author: "명심보감",
  },
  {
    quote:
      "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 ",
    author: "랄프 왈도 에머슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
