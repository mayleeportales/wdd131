// ==== FocusFirst - Study Task Tracker ====
// This script stores study tasks in the browser using localStorage, 
// so the list is still there after the page is closed and reopened.

// Select the elements we need from the page 
const taskForm = document.querySelector("#task-form");
const taskNameInput = document.querySelector("#task-name");
const taskSubjectInput = document.querySelector("#task-subject");
const taskList = document.querySelector("#task-list");
const progressText = document.querySelector("#progress");

// Key used to save/read the data in localStorage
const STORAGE_KEY = "focus-first-tasks";

// Load saved tasks 
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Save the tasks array into localStorage
// Turn the array into a task string with JSON.stringify before saving.
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
} 

// Show the progress message
function updateProgress() {
    //.filter() counts how many tasks are done.
    const doneCount = tasks.filter((task) => task.done).length;
    // Template literal to builds the string with ${} placeholders.
    progressText.textContent = `${doneCount} of ${tasks.length} tasks done`;
}

// Draw the whole list on the page
function renderTasks() {
    // Build all the <li> HTML at once using .map()
    // and .join("") to glue the pieces into a single string.
    taskList.innerHTML = tasks
        .map((task, index) => {
            // Conditional to add the "done" class only if finished.
            const doneClass = task.done ? "done" : "";
            // Conditional to choose the right icon for the toggle button.
            const checkIcon = task.done ? "↲" : "✓";

            // Template literal to build the HTML for one task row.
            return `
            <li class="task-item ${doneClass}">
                <span class="task-text">
                    ${task.name}
                    <span class="task-subject">${task.subject}</span>
                </span>
                <span>
                    <button class="task-btn toggle" data-index="${index}" aria-label="Mark task done">${checkIcon}</button>
                    <button class="task-btn remove" data-index="${index}" aria-label="Remove task">🗑️</button>
                </span>
            </li>`;
        })
        .join("")

        updateProgress();
        saveTasks();
}

// Add a new task (runs when the form is submitted)
taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); //stop the page from reloading

    // Create a task object with three properties.
    const newTask = {
        name: taskNameInput.value,
        subject: taskSubjectInput.value,
        done: false
    };

    tasks.push(newTask); // add it to the array
    renderTasks(); // redraw the list
    taskForm.reset(); // clear the form fields
    taskNameInput.focus(); // put the cursor back for the next task
});

// Handle clicks on the list (toggle done / remove)
taskList.addEventListener("click", (event) => {
    // Read which task was clicked from the data-index attribute.
    const index = event.target.dataset.index;
    if (index === undefined) return; // clicked empty space - ignore

    // Conditional to decide what to do by the button's class.
    if (event.target.classList.contains("toggle")) {
        //Flip done from true to false (or back)
        tasks[index].done = !tasks[index].done;
    } else if (event.target.classList.contains("remove")) {
        // remove 1 item at this position from the array.
        tasks.splice(index, 1);
    }

    renderTasks(); // redraw and save after any change
   
});

// Show any saved tasks as soon as the page loads
renderTasks();

// Feedback
const FeedbackForm = document.querySelector("#feedback-form");
const FeedbackMessage = document.querySelector("#feedback-message");

FeedbackForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading

    // Read the name to personalize the message
    const name = document.querySelector("#name").value;
    FeedbackMessage.textContent = `Thank you, ${name}! Your feedback was sent. 💚`;

    FeedbackForm.reset(); // clear the fields
});