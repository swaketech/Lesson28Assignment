// Put your JavaScript code in this file
console.log("e");
const answers = ["Yes","No","Maybe","Ask again later","Cannot predict now","Most likely","Outlook not so good"];
const circle = document.getElementById("circle");
function displayAnswer() {
    console.log("c");
    let index = Math.floor(Math.random() * answers.length);
    circle.style.display = 'block';
    circle.innerHTML = `<p>${answers[index]}</p>`;
}
const ball = document.getElementById("ball");
ball.addEventListener("mousedown", () => {
    question = document.getElementById("question");
    if (question.value === "") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
})
const reset = document.getElementById("reset");
reset.addEventListener("onclick", () => {
    circle.style.display = "none";
})
