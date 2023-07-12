const el = document.querySelector("link");

let wid = window.innerWidth;
let hei = window.innerHeight;

let size = wid > hei;
let sizex = wid < hei;

let link1 = el.getAttribute("href") === "style.css";
let link2 = el.getAttribute("href") === "dark.css";

let i = 0;

if (size) {
    el.href = "style.css";
} else {
    el.href = "styleRE.css";
}

function darkMode() {
    let num = i === 0;
    if (size && num) {
        el.href = "dark.css";
        i++;
    }  
      else if (size && !num) {
        el.href = "style.css";
        i--;
      } 
        if (sizex && num) {
           el.href = "darkRE.css";
           i++;
        }  
          else if (sizex && !num) {
            el.href = "styleRE.css";
            i--;
          } 
} 