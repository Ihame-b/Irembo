const hourel = document.querySelector(".hour");
const minuteel = document.querySelector(".minute");
const secondel = document.querySelector(".second");

function updateClock() {
  const now = new Date();
  setTimeout(updateClock, 1000)
  const Second = now.getSeconds();
  const Minute = now.getMinutes();
  const Hour = now.getHours();

  const hourDeg = (Hour/12) * 360;
  hourel.style.transform = `rotate(${hourDeg}deg)`
  const MinDeg = (Minute/60) * 360;
  minuteel.style.transform = `rotate(${MinDeg}deg)`
  const SecDeg = (Second/60) * 360;
  secondel.style.transform = `rotate(${SecDeg}deg)`

}
updateClock()
