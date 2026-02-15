const quiz = [
    {
        question: "Capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which language is used for web?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "2 + 5 = ?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    }
];

let index = 0;
let score = 0;
let selected = null;

function loadQuestion() {
    const q = quiz[index];
    document.getElementById("question").textContent = q.question;

    let optionsHTML = "";
    q.options.forEach(opt => {
        optionsHTML += `<button onclick="selectAnswer('${opt}')">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function selectAnswer(option) {
    selected = option;
}

function nextQuestion() {
    if (selected === quiz[index].answer) {
        score++;
    }

    selected = null;
    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").textContent = "Score: " + score;
    }
}

loadQuestion();
