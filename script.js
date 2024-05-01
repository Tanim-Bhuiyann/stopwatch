//#region connect to dom

const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");

//#region check elements exist
if (!startButton || !stopButton || !secondsElement || !minutesElement) {
  throw new Error("Element missing or typo in query selector");
}

//
let intervalID;
let seconds = 0;
let minutes = 0;
const handleStartButtonClick = () => {
  seconds = 0;
  minutes = 0;
  secondsElement.innerText = "00";
  minutesElement.innerText = "00";
  startButton.classList.add("hidden");
  stopButton.classList.remove("hidden");

  clearInterval(intervalID);
  intervalID = setInterval(() => {
    if (seconds != 59) {
      seconds++;
    //   console.log("seconds");
      secondsElement.innerText = seconds.toString().padStart(2, "0");
    } else {
      seconds = 0;
      minutes++;
    //   console.log("minutes");
      secondsElement.innerText = seconds.toString().padStart(2, "0");
      minutesElement.innerText = minutes.toString().padStart(2, "0");
    }
  }, 1000);
};

const handleStopButtonClick = () => {
  stopButton.classList.add("hidden");
  startButton.classList.remove("hidden");
//   localStorage.setItem("minutes", minutesElement);
//   localStorage.setItem("seconds", secondsElement);
  clearInterval(intervalID);
};

startButton.addEventListener("click", handleStartButtonClick);
stopButton.addEventListener("click", handleStopButtonClick);

// const saveMinutes = localStorage.getItem("minutes");
// const saveSeconds = localStorage.getItem("seconds");


//   if ((minutes === 0) & (seconds === 0)) {
//     minutesElement.innerText = minutes + "0";
//     secondsElement.innerText = seconds + "0";
//   } else {
//     minutesElement.innerText = minutes;
//     secondsElement.innerText = seconds;
//   }

