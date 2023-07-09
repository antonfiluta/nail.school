const el = document.querySelector("link");
let wid = window.innerWidth;
let hei = window.innerHeight;
if (wid > hei) {
    el.href = "style.css";
} else {
    el.href = "styleRE.css";
}