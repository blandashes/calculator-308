const alpha = "abcdefghijklmnopqrstuvwxyz"; /* ABCDEFGHIJKLMNOPQRSTUVWXYZ */

const names = document.getElementById("name");
const day = document.getElementById("day")
const passwordTxt = document.getElementById("password");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
    passwordTxt.value = generateSum(names.value.toLowerCase(), day.value);
  });

$("#day").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#generate").click();
    }
})

const generateSum = (names, day) => {
    let password = "";
    let sum = 0;
    let errorTxt = "Invalid day input"

    for (let i = 0; i < names.length; i++) {
        sum += alpha.indexOf(names[i]) + 1
    }
    let temp = 31 - day
    if (temp < 0 || temp > 30) {
        return errorTxt
    } else {
        sum = sum.toString()
        len = sum.length
        temp = temp.toString().padStart(2, '0')

        password = `${sum[len - 2]}${sum[len - 1]}${temp}`
        return password
    }
}

const copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", () => {
    passwordTxt.select();
    document.execCommand("copy");
    alert("Password Copied");
});