const clockTitle = document.querySelector(".js-clock");

function ddayClock() {
  const date = new Date();
  const eve = new Date(`${date.getFullYear()}-12-24T00:00:00`);
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000;
  const dday = eve.getTime() - date.getTime();
  const ddayDay = Math.floor(dday / day);
  const ddayHour = String(Math.floor((dday % day) / hour)).padStart(2, "0");
  const ddayMinute = String(Math.floor((dday % hour) / minute)).padStart(
    2,
    "0"
  );
  const ddaySecond = String(Math.floor((dday % minute) / second)).padStart(
    2,
    "0"
  );
  clockTitle.innerText = `${ddayDay}d ${ddayHour}h ${ddayMinute}m ${ddaySecond}s`;
}

ddayClock();
setInterval(ddayClock, 1000);
