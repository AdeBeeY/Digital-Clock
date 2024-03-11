const display = document.querySelector('#display');

let digital;
function getTime() {
  let hour = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();

  digital = `${hour}:${mins}:${sec}`;
  console.log(digital);
  display.innerHTML = digital;
}

setInterval(() => {
  getTime();
}, 1000);