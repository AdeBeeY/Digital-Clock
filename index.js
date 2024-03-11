const display = document.querySelector('#display');

let digital;
function getTime() {
  let hour = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();

  //make the time diplay in 2digits
  hour = String(hour).padStart(2, '0');
  mins = String(mins).padStart(2, '0');
  sec = String(sec).padStart(2, '0');

  digital = `${hour}:${mins}:${sec}`;
  display.innerHTML = digital;
}

setInterval(() => {
  getTime();
}, 1000);