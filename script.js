let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let hhf = mm.toString().padStart(2, "0");
  let mmf = mm.toString().padStart(2, "0");
  let ssf = ss.toString().padStart(2, "0");
  let msf = ms.toString().padStart(2, "0");

  return `${hhf}:${mmf}:${ssf}:${msf}`;
}
function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  var li = document.createElement("li");
  var inputValue = timeToString(elapsedTime);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL1").appendChild(li);

  var span = document.createElement("SPAN");
  span.className = "close";
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00:00");
  elapsedTime = 0;
  document.getElementById("myUL1").innerHTML = "";
  showButton("PLAY");
}

function showButton(buttonKey) {
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  buttonToHide.style.display = "none";
  buttonToShow.style.display = "block";
}
