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
  if (position < 0) {
  if (window.innerWidth < 800) { 
    position += 81.7;
    marginBox.style.marginLeft = position + 'vw';
  } else {
    position += 73.855;
    marginBox.style.marginLeft = position + 'vw';
  }
}
};

function next() {
  if (position > -147.71) {
  if (window.innerWidth < 800) { 
    position -= 81.7;
    marginBox.style.marginLeft = position + 'vw';
  } else {
    position -= 73.855;
    marginBox.style.marginLeft = position + 'vw';
  }
}
};


function toUp() {
  if (window.innerHeight < window.scrollY) {
    let toUp = document.getElementById('toUp');
    toUp.style.display = "block";
  }
}
window.addEventListener('scroll', toUp);

function toUpReverse() {
  if (window.innerHeight > window.scrollY) {
    let toUp = document.getElementById('toUp');
    toUp.style.display = "none";
  }
}
window.addEventListener('scroll', toUpReverse);