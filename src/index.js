const clockTitle = document.querySelector(".js-clock");

function ddayClock() {
  const xmas = new Date("December 25, 2022 00:00:00");
  const date = new Date();

  const dday = parseInt(xmas.getTime() - date.getTime());

  const day = 1000 * 60 * 60 * 24;
  const minute = 1000 * 60 * 60;
  const second = 1000 * 60;

  const getDay = String(Math.floor(dday / day));
  const getHour = String(Math.floor((dday % day) / minute)).padStart(2, "0");
  const getMinute = String(
    Math.floor(((dday % day) % minute) / second)
  ).padStart(2, "0");
  const getSecond = String(
    Math.floor((((dday % day) % minute) % second) / 1000)
  ).padStart(2, "0");

  clockTitle.innerText = `${getDay}d ${getHour}h ${getMinute}m ${getSecond}s`;
}

ddayClock();
setInterval(ddayClock, 1000);
