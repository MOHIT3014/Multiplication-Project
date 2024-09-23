const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const quesEl = document.getElementById("ques");
const formEl = document.getElementById("form");
const inputEl = document.getElementById('answer')
const scoreEl = document.getElementById('score');

quesEl.innerText = `What is ${num1} multiplied by ${num2}?`;

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}
scoreEl.innerText = `Score: ${score}`;

const answer = num1 * num2;
console.log(answer);

formEl.addEventListener('submit', () => {
     // Prevent form submission
    const userAnswer = +inputEl.value;
    console.log(userAnswer, typeof userAnswer);
    if (userAnswer === answer) {
        score++;
        console.log(score);
    } else {
        score--;
        console.log(score);
    }
    updateLocalStorage();
    scoreEl.innerText = `Score: ${score}`;
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}
