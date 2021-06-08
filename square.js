var root

const Numbers = document.getElementById("square")
const rootTxt = document.getElementById("root");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
    rootTxt.value = rooter(Numbers.value);
});

$("#square").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#generate").click();
    }
});


function creator (iteration) {
    const elem = document.createElement("div");
    elem.className = "iteration"
    const elemText = document.createTextNode(iteration);
    elem.appendChild(elemText);
    document.body.appendChild(elem);}

function rooter(Numbers) {
    root = Math.abs(Numbers)
    while (Math.abs(Numbers - root ** 2) > 0.0005) {
        creator(root)
        root = (root + Numbers / root) / 2
    }
    console.log(root);
    if (Numbers < 0) {
        root = root.toFixed(4).concat("i")
        return root
    } else {
        return root.toFixed(4)
    }
}

const copyBtn = document.getElementById("copy");
  copyBtn.addEventListener("click", () => {
    rootTxt.select();
    document.execCommand("copy");
    alert("Root Copied");
});