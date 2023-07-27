const el = document.querySelector("link");

let wid = window.innerWidth;
let hei = window.innerHeight;

let size = wid > hei;
let sizex = wid < hei;

let i = 0;

if (size) {
    el.href = "style.css";
} else {
    el.href = "styleRE.css";
}


