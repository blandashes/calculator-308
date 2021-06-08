class MathCourse {
    constructor(name, score, cgpa) {
        this.name = document.getElementById(name)
        this.score = document.getElementById(score)
        this.cgpa = document.getElementById(cgpa)
    }
}

let students = []

let std1 = new MathCourse("Stdname-3", "Score-3", "Stdcgpa-3")
let std2 = new MathCourse("stdname-2", "score-2", "stdcgpa-2")
let std3 = new MathCourse("Stdname-4", "Score-4", "Stdcgpa-4")
let std4 = new MathCourse("Stdname-6", "Score-6", "Stdcgpa-6")
let std5 = new MathCourse("Stdname-7", "Score-7", "Stdcgpa-7")

students.push(std1)
students.push(std2)
students.push(std3)
students.push(std4)
students.push(std5)

const tabber = document.getElementById("tabber")
const passer = document.getElementById("pass-link")
const grader = document.getElementById("grade-link")

var meanScore = 0
var stddev = 0
let arr = new Array(5)
let arrfail = []
let arrpass = []
let studies = [[], [], [], [], []]

function average () {
    for (let i = 0; i < 5; i++) {
        meanScore += arr[i]
    }
    meanScore /= 5
    return meanScore
}

function stdDeviation (array) {
    const mean = average()
    stddev = Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / 5)
    return stddev
}

function pass () {
    for (let i = 0; i < arrpass.length; i++) {
        const ele = document.createElement("li")
        ele.setAttribute("id", "listicle")
        document.getElementById("pass").appendChild(ele)
    
        const eleme = document.createElement("div")
        eleme.className = "text-block-2 result-text"
        const elemTexte = document.createTextNode(arrpass[i])
        eleme.appendChild(elemTexte)
        ele.appendChild(eleme)
    
        const eleme2 = document.createElement("div")
        eleme2.className = "text-block-2 result-text pass"
        const elemTexte2 = document.createTextNode("PASS")
        eleme2.appendChild(elemTexte2)
        ele.appendChild(eleme2)
    }
}

function fail () {
    for (let i = 0; i < arrfail.length; i++) {
        const ele = document.createElement("li")
        ele.setAttribute("id", "listicle")
        document.getElementById("pass").appendChild(ele)
    
        const eleme = document.createElement("div")
        eleme.className = "text-block-2 result-text"
        const elemTexte = document.createTextNode(arrfail[i])
        eleme.appendChild(elemTexte)
        ele.appendChild(eleme)
    
        const eleme2 = document.createElement("div")
        eleme2.className = "text-block-2 result-text fail"
        const elemTexte2 = document.createTextNode("FAIL")
        eleme2.appendChild(elemTexte2)
        ele.appendChild(eleme2)
    }
}

function grade () {
    for (let i = 0; i < 5; i++) {
        const ele = document.createElement("li")
        ele.setAttribute("id", "listicle-1")
        document.getElementById("grade").appendChild(ele)

        let grading = ""
        if (i == 0) {
            grading = "A"
        } else if (i == 1) {
            grading = "B"
        } else if (i == 2) {
            grading = "C"
        } else if (i == 3) {
            grading = "D"
        } else if (i == 4) {
            grading = "F"
        } else {
            grading = "Unavailable"
        }

        for (let j = 0; j < studies[i].length; j++) {
            const eleme = document.createElement("div")
            eleme.className = "text-block-2 result-text"
            const elemTexte = document.createTextNode(studies[i][j])
            eleme.appendChild(elemTexte)
            ele.appendChild(eleme)

            const eleme2 = document.createElement("div")
            eleme2.className = "text-block-2 result-text process"
            const elemTexte2 = document.createTextNode(grading)
            eleme2.appendChild(elemTexte2)
            ele.appendChild(eleme2)
        }
    }
}

passer.addEventListener("click", () => {
    pass()
    fail()
})

grader.addEventListener("click", () => {
    grade()
})

tabber.addEventListener("click", () => {
    arr[0] = Number(std1.score.value)
    arr[1] = Number(std2.score.value)
    arr[2] = Number(std3.score.value)
    arr[3] = Number(std4.score.value)
    arr[4] = Number(std5.score.value)

    for (let i = 0; i < 5; i++) {
        if (students[i].score.value < meanScore) {
            arrfail.push(students[i].name.value)
        } else if (students[i].score.value >= meanScore) {
            arrpass.push(students[i].name.value)
        }
    }

    for (let i = 0; i < 5; i++) {
        if (students[i].score.value > meanScore + 2 * stddev) {
            studies[0].push(students[i].name.value)
        } else if (students[i].score.value > meanScore + stddev) {
            studies[1].push(students[i].name.value)
        } else if (students[i].score.value > meanScore) {
            studies[2].push(students[i].name.value)
        } else if (students[i].score.value == meanScore) {
            studies[3].push(students[i].name.value)
        } else if (students[i].score.value < meanScore) {
            studies[4].push(students[i].name.value)
        }
    }
})