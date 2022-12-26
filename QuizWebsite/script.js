const quizData = [
    {
        question: "Q1. What is the Full Form oF HTML",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4",
    },
  
    {
        question: "Q2. What is the Full Form oF CSS",
        a: "Cascading style sheets",
        b: "Cascading style sheeps",
        c: "cartoon style sheets",
        d: "Cascading super sheets",
        ans: "ans1",
    },
    {
        question: "Q3. What is the Full Form oF HTTP",
        a: "HyperTool transFer protocol ",
        b: "HyperText transFer practise",
        c: "HyperText transFer protocol",
        d: "Hyperbool transFer protocol",
        ans: "ans3",
    },
    {
        question: "Q4. What is the Full Form oF javascript ",
        a: "JoScript",
        b: "javaScope",
        c: " JavaScipe",
        d: "javaScript",
        ans: "ans4",
    },
];


let question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let btn = document.querySelector('.btn');
let ansEl = document.querySelectorAll('.ans');
let scorepl = document.querySelector('.score');

let quizCount = 0;
let score = 0;
// console.log(quizData[quizCount].ans);

// Deselect option
const delSelectAll = () => {
    ansEl.forEach(ansEls => ansEls.checked = false)
}

//   load Function deFine
const loadQuestion = () => {
    delSelectAll();
    let questionList = quizData[quizCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

// Getting user input
const getCheckedAns = () => {
    let answer;
    ansEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Button click Function
btn.addEventListener('click', () => {
    let checkedAns = getCheckedAns();
    if (checkedAns === quizData[quizCount].ans) {
       score=score+1;
    };
    quizCount++;
    if (quizCount < quizData.length)
        loadQuestion();
        
    else {
        scorepl.innerHTML=`
        <h3 class="result">You scored ${score}/${quizData.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `
        scorepl.classList.remove('score')
    }

});