function moreRates1() {
  disEl1.classList.remove("display");
  rateButton1.classList.add("display");
  rateButtonD.classList.remove("display");
}

function moreRatesD() {
  disEl1.classList.add("display");
  rateButtonD.classList.add("display");
  rateButton1.classList.remove("display");
}

const prewB = document.getElementById('prew');
const nextB = document.getElementById('next');
let images = document.querySelector('.sliderImg')
let width = images.offsetWidth;
let position = 0;
let offWidth = 73.6;

function prew() {
  position += 73.855;
  marginBox.style.marginLeft = position + 'vw';
};

function next() {
  position -= 73.855;
  marginBox.style.marginLeft = position + 'vw';
};