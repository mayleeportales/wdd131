// Array of question objects
const questions = [
    {
        question: "When you have a big assignment, what usually happens first?",
        options: [
            {text: "I worry I won't do it well enough to even start.", type: "fear"},
            {text: "I plan every detail and wait for the perfect moment.", type: "perfectionist"},
            {text: "I feel bored and find something more fun to do.", type: "unmotivated"},
            {text: "I freeze because I don't know where to begin.", type: "overwhelmed"}
        ]
    }, 
    
    {
        question: "What is the most common excuse you tell yourself?",
        options: [
            {text: "\"What if I try and it still turns out bad?\"", type: "fear"},
            {text: "\"I'll start once everything is just right.\"", type: "perfectionist"},
            {text: "\"This is boring, I'll do it later.\"", type: "unmotivated"},
            {text: "\"There's too much to do, I can't handle it.\"", type: "overwhelmed"}
        ]
    },

    {
        question: "What would help you the most right now?",
        options: [
            {text: "Believing that rough first try is okay.", type: "fear"},
            {text: "Letting go of the need to be perfect", type: "perfectionist"},
            {text: "Finding a reason to actually care about that task.", type: "unmotivated"},
            {text: "Breaking the work into smaller, clearer steps.", type: "overwhelmed"}
        ]
    },

    {
        question: "When a deadline gets close, you usually...",
        options: [
            {text: "Avoid it because the pressure feels scary.", type: "fear"},
            {text: "Keep polishing instead of finishing.", type: "perfectionist"},
            {text: "Rush it at the last minute with low energy.", type: "unmotivated"},
            {text: "Panic because everything piled up at once.", type: "overwhelmed"}
        ]
    }
];

// Select the form where questions will go
const quizForm = document.querySelector("#quiz-form");

// Function the builds and displays all the questions
function buildQuiz() {
    quizForm.innerHTML = questions
        .map((item, index) => {
            const optionsHtml = item.options
                .map(
                    (option) => `
                        <label class="option">
                            <input type="radio" name="question${index}" value="${option.type}">
                            ${option.text}
                        </label>`
                )
                .join("");

            return `
            <fieldset class="question-card">
                <legend>${index + 1}. ${item.question}</legend>
                ${optionsHtml}
            </fieldset>`;
        })
        .join("");
}

// Run it when the page loads
buildQuiz();

// Hamburger menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
menuButton.addEventListener("click", () => navMenu.classList.toggle("open"));

// Description for each procrastination type
const resultInfo = {
    fear: {
        title: "The Fearful Procrastinator",
        advice: "You delay because you're afraid of failing. Remember: a rough first attempt is always better than a perfect plan that never starts."
    },

    perfectionist: {
        title: "The Perfectionist Procrastinator",
        advice: "You wait for the perfect moment that never comes. Try aiming for 'done' instead of 'perfect' and adjust later."
    },

    unmotivated: {
        title: "The Unmotivated Procrastinator",
        advice: "Boring tasks drain your energy. Connect the task to a reward or a bigger goal to give it meaning." 
    },

    overwhelmed: {
        title: "The Overwhelmed Procrastinator",
        advice: "Big tasks freeze you. Break the work into tiny steps and start with the smallest one."
    }
};

// Select the button and the result container
const resultButton = document.querySelector("#result-button");
const resultDiv = document.querySelector("#quiz-result");

function showResult() {
    // Object to count each type
    const counts = {fear: 0, perfectionist: 0, unmotivated: 0, overwhelmed: 0};
    
    // Get all checked radio buttons and count their types
    const chosen = document.querySelectorAll('input[type="radio"]:checked');

    // Conditional to make sure all questions were answered
    if (chosen.length < questions.length) {
        resultDiv.innerHTML = `<p class="warning">Please answer all questions before seeing your result.</p>`
        return;
    }

    // Count the votes for each type
    chosen.forEach((input) => {
        counts[input.value] = counts[input.value] + 1;
    });

    // Find the type with the most votes
    let topType = "fear";
    for (const type in counts) {
        if (counts[type] > counts[topType]) {
            topType = type;
        }
    }

    // Show the result using a template literal
    const info = resultInfo[topType];
    resultDiv.innerHTML = `
    <div class="result-card">
        <h2>${info.title}</h2>
        <p>${info.advice}</p>
    </div>`;
}

resultButton.addEventListener("click", showResult);