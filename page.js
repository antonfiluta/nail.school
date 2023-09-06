function toUp() {
  if (window.innerHeight < (window.scrollY - 200)) {
    let toUps = document.querySelector('.toUp');
    toUps.style.display = "block";
  }
}
window.addEventListener('scroll', toUp);

function toUpReverse() {
  if (window.innerHeight > (window.scrollY - 200)) {
    let toUps = document.querySelector('.toUp');
    toUps.style.display = "none";
  }
}
window.addEventListener('scroll', toUpReverse);

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

let position = 0;
if (window.innerWidth < 800) {
  position = -1760;
} else {
  position = -1640;
}

function toBack() {
  if (position != 0) {
  if (window.innerWidth < 800) { 
    position += 22;
    sliderUl.style.marginLeft = position + 'vw';
  } else {
    position += 20.5;
    sliderUl.style.marginLeft = position + 'vw';
  }
}
};

function toNext() {
if (window.innerWidth < 800) {
  if (position != -3432) {
   position -= 22;
   sliderUl.style.marginLeft = position + 'vw';
  }
} else {
  if (position != -3198) {
  position -= 20.5;
  sliderUl.style.marginLeft = position + 'vw';
  }
};
}