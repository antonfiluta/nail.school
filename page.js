const linkS = document.querySelector("link");

let i = 0;

let widS = window.innerWidth;
let heiS = window.innerHeight;
let sizeS = widS > heiS;
if (sizeS) {
    linkS.href = "style.css";
} else {
    linkS.href = "styleRE.css";
}

let buttonR1 = document.getElementById("rateButton1");
let buttonR2 = document.getElementById("rateButton2");
let buttonD = document.getElementById("rateButtonD");
let el1 = document.getElementById("disEl1");
let el2 = document.getElementById("disEl2");

function moreRates1() {
  el1.classList.toggle("display");
  buttonR1.classList.add("display");
  buttonR2.classList.toggle("display");
}

function moreRates2() {
  el2.classList.toggle("display");
  buttonR2.classList.add("display");
  buttonD.classList.toggle("display");
}

function moreRatesD() {
  buttonD.classList.add("display");
  buttonR2.classList.add("display");
  buttonR1.classList.toggle("display");
}

window.addEventListener('scroll', function() {
  let wid = window.innerWidth;
  let hei = window.innerHeight;
  let size = wid > hei;
  if (size) {
    linkS.href = "style.css";
  } else {
    linkS.href = "styleRE.css";
}
});
