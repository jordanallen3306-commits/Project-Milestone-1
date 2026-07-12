// Wait until the webpage has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get the quiz buttons
    const gradeButton = document.getElementById("gradeButton");
    const resetButton = document.getElementById("resetButton");

    // Grade the quiz when the Grade Quiz button is clicked
    gradeButton.addEventListener("click", gradeQuiz);

    // Reset the quiz when the Reset Quiz button is clicked
    resetButton.addEventListener("click", resetQuiz);
});

/*
    Grades all five questions,
    calculates the total score,
    and displays the final result.
*/
function gradeQuiz() {

    let score = 0;

    score += gradeQuestion1();
    score += gradeQuestion2();
    score += gradeQuestion3();
    score += gradeQuestion4();
    score += gradeQuestion5();

    // Display total score
    const scoreResult = document.getElementById("scoreResult");
    scoreResult.textContent = "You scored " + score + " out of 5.";

    // Display pass or fail message
    const passFailResult = document.getElementById("passFailResult");

    if (score === 5) {
        passFailResult.textContent =
            "Excellent! You earned a perfect score.";
        passFailResult.className = "correct";
    } else if (score >= 3) {
        passFailResult.textContent =
            "You passed the quiz.";
        passFailResult.className = "correct";
    } else {
        passFailResult.textContent =
            "You did not pass. Review the website and try again.";
        passFailResult.className = "incorrect";
    }
}

/*
    Grades Question 1:
    Fill-in-the-blank
*/
function gradeQuestion1() {

    const answer =
        document.getElementById("answer1").value.trim().toLowerCase();

    const feedback = document.getElementById("feedback1");
    const question = document.getElementById("question1");

    if (answer === "markup") {

        showCorrect(
            question,
            feedback,
            "Score: 1/1 — Correct! HTML stands for HyperText Markup Language."
        );

        return 1;
    }

    showIncorrect(
        question,
        feedback,
        "Score: 0/1 — Incorrect. The correct answer is Markup."
    );

    return 0;
}

/*
    Grades Question 2:
    Multiple-choice
*/
function gradeQuestion2() {

    const selectedAnswer =
        document.querySelector('input[name="answer2"]:checked');

    const feedback = document.getElementById("feedback2");
    const question = document.getElementById("question2");

    if (selectedAnswer && selectedAnswer.value === "CSS") {

        showCorrect(
            question,
            feedback,
            "Score: 1/1 — Correct! CSS controls the appearance of a webpage."
        );

        return 1;
    }

    showIncorrect(
        question,
        feedback,
        "Score: 0/1 — Incorrect. The correct answer is CSS."
    );

    return 0;
}

/*
    Grades Question 3:
    Multiple-choice
*/
function gradeQuestion3() {

    const selectedAnswer =
        document.querySelector('input[name="answer3"]:checked');

    const feedback = document.getElementById("feedback3");
    const question = document.getElementById("question3");

    if (
        selectedAnswer &&
        selectedAnswer.value === "Tim Berners-Lee"
    ) {

        showCorrect(
            question,
            feedback,
            "Score: 1/1 — Correct! Tim Berners-Lee created HTML and proposed the World Wide Web."
        );

        return 1;
    }

    showIncorrect(
        question,
        feedback,
        "Score: 0/1 — Incorrect. The correct answer is Tim Berners-Lee."
    );

    return 0;
}

/*
    Grades Question 4:
    Multiple-choice
*/
function gradeQuestion4() {

    const selectedAnswer =
        document.querySelector('input[name="answer4"]:checked');

    const feedback = document.getElementById("feedback4");
    const question = document.getElementById("question4");

    if (
        selectedAnswer &&
        selectedAnswer.value === "JavaScript"
    ) {

        showCorrect(
            question,
            feedback,
            "Score: 1/1 — Correct! JavaScript adds interaction and functionality."
        );

        return 1;
    }

    showIncorrect(
        question,
        feedback,
        "Score: 0/1 — Incorrect. The correct answer is JavaScript."
    );

    return 0;
}

/*
    Grades Question 5:
    Multi-select
*/
function gradeQuestion5() {

    const selectedAnswers =
        document.querySelectorAll('input[name="answer5"]:checked');

    const feedback = document.getElementById("feedback5");
    const question = document.getElementById("question5");

    // Store selected checkbox values
    const answers = [];

    selectedAnswers.forEach(function (checkbox) {
        answers.push(checkbox.value);
    });

    // Correct choices
    const hasHeader = answers.includes("header");
    const hasNav = answers.includes("nav");
    const hasSection = answers.includes("section");
    const hasDiv = answers.includes("div");

    if (
        hasHeader &&
        hasNav &&
        hasSection &&
        !hasDiv &&
        answers.length === 3
    ) {

        showCorrect(
            question,
            feedback,
            "Score: 1/1 — Correct! <header>, <nav>, and <section> are semantic HTML elements."
        );

        return 1;
    }

    showIncorrect(
        question,
        feedback,
        "Score: 0/1 — Incorrect. The correct answers are <header>, <nav>, and <section>."
    );

    return 0;
}

/*
    Displays correct feedback
    and applies correct-answer styling.
*/
function showCorrect(question, feedback, message) {

    question.classList.remove("incorrect-answer");
    question.classList.add("correct-answer");

    feedback.textContent = message;
    feedback.className = "feedback correct";
}

/*
    Displays incorrect feedback
    and applies incorrect-answer styling.
*/
function showIncorrect(question, feedback, message) {

    question.classList.remove("correct-answer");
    question.classList.add("incorrect-answer");

    feedback.textContent = message;
    feedback.className = "feedback incorrect";
}

/*
    Clears answers, colors, feedback,
    score, and pass/fail results.
*/
function resetQuiz() {

    // Wait until the browser resets the form
    setTimeout(function () {

        const questionSections =
            document.querySelectorAll(".question");

        const feedbackMessages =
            document.querySelectorAll(".feedback");

        // Remove correct and incorrect colors
        questionSections.forEach(function (question) {
            question.classList.remove("correct-answer");
            question.classList.remove("incorrect-answer");
        });

        // Clear feedback messages
        feedbackMessages.forEach(function (feedback) {
            feedback.textContent = "";
            feedback.className = "feedback";
        });

        // Restore the original final result message
        document.getElementById("scoreResult").textContent =
            "Your score will appear here after you submit the quiz.";

        document.getElementById("passFailResult").textContent = "";
        document.getElementById("passFailResult").className = "";

    }, 0);
}