// Quizvragen / 
// bron: https://simplestepscode.com/javascript-quiz-tutorial/
// bron: https://chatgpt.com prompt: hoe maak ik een quiz met main.js in visual studio code?
const questions = [
    {
        question: "Hoeveel procent van jongeren gebruiken TikTok (in 2024)?",
        answers: { A: "25%", B: "39%", C: "62%", D: "74%" },
        correct: "D"
    },
    {
        question: "Welke leeftijdsgroep scoort het laagst op gezonde eetgewoonten volgens het Nederlands Jeugdinstituut?",
        answers: { A: "1-4 jaar", B: "4-12 jaar", C: "12-18 jaar", D: "18-25 jaar" },
        correct: "C"
    },
    {
        question: "Welke vorm van reclame zien leerlingen van het Stedelijk Gymnasium Arnhem het vaakst op sociale media?",
        answers: { A: "Influencers die een voedselproduct promoten", B: "Influencers die een evenement promoten", C: "Influencers die een game promoten", D: "Influencers die mode-items promoten" },
        correct: "A"
    },
    {
        question: "Hoeveel berichten zijn er op TikTok met #Intuitiveeating?",
        answers: { A: "11.350", B: "215.400", C: "2.2 miljoen", D: "3.1 miljoen" },
        correct: "B"
    },
    {
        question: "Hoeveel berichten zijn er op TikTok met #Caloriedeficit?",
        answers: { A: "50.500", B: "320.600", C: "1.3 miljoen", D: "2.7 miljoen" },
        correct: "C"
    },
    {
        question: "Hoeveel jongeren willen uiteindelijk in het echt iets aan hun gezicht veranderen door fotobewerking?",
        answers: { A: "5%", B: "33%", C: "45%", D: "65%" },
        correct: "B"
    },
    {
        question: "Hoeveel jongeren zeggen dat sociale media een negatieve invloed hebben op hun zelfbeeld?",
        answers: { A: "10%", B: "30%", C: "40%", D: "50%" },
        correct: "C"
    }
];

let current = 0;

// Vragen laden
function loadQuestion() {
    const q = questions[current];
    document.getElementById("question-text").innerText = q.question;

    for (const key in q.answers) {
        document.getElementById(key).innerText = `${key}: ${q.answers[key]}`;
    }

    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

// Antwoord controleren
function checkAnswer(letter) {
    const q = questions[current];
    const feedback = document.getElementById("feedback");

    if (letter === q.correct) {
        feedback.innerText = "Goed gedaan!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Fout! Het juiste antwoord is ${q.correct}.`;
        feedback.style.color = "red";
    }

    document.getElementById("next-btn").style.display = "block";
}

// Doorgaan naar de volgende vraag
function nextQuestion() {
    current++;

    if (current >= questions.length) {
        document.getElementById("question-text").innerText = "Einde";
        document.getElementById("answers").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("feedback").innerText = ""; // feedback verwijderen
        return;
    }

    loadQuestion();
}

// Start de quiz
loadQuestion();
