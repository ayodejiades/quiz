// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300; // Default: 5 minutes
let timerInterval;
let quizQuestions = [];
let questionCount = 10; // Default question count
let selectedTimer = 5; // Default timer in minutes
let answerSelected = false; // Track if an option has been selected

// DOM Elements
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const startQuizBtn = document.getElementById("start-quiz-btn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const timerDisplay = document.getElementById("timer-display");
const timerElement = document.getElementById("time");
const currentQuestionNum = document.getElementById("current-question-num");
const totalQuestionsElement = document.getElementById("total-questions");
const scoreNumber = document.getElementById("score-number");
const scorePercent = document.getElementById("score-percent");
const feedbackMessage = document.getElementById("feedback-message");
const restartBtn = document.getElementById("restart-btn");
const newSettingsBtn = document.getElementById("new-settings-btn");
const progressFill = document.getElementById("progress-fill");

// Event listeners for settings buttons
document.querySelectorAll(".count-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove selected class from all count buttons
    document.querySelectorAll(".count-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Add selected class to clicked button
    button.classList.add("selected");

    // Store the selected question count
    const value = button.getAttribute("data-count");
    questionCount = value === "all" ? null : parseInt(value);
  });
});

document.querySelectorAll(".time-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove selected class from all time buttons
    document.querySelectorAll(".time-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Add selected class to clicked button
    button.classList.add("selected");

    // Store the selected timer value (in minutes)
    selectedTimer = parseInt(button.getAttribute("data-time"));
  });
});

// Function to update progress bar
function updateProgressBar(current, total) {
  if (progressFill) {
    const percentage = (current / total) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Function to animate score circle
function animateScoreCircle(score, total) {
  const scoreCircleProgress = document.getElementById("score-circle-progress");
  if (scoreCircleProgress) {
    const percentage = (score / total) * 100;
    // Calculate based on the radius 45 specified in the circle element
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    // Set the stroke-dasharray to the full circumference
    scoreCircleProgress.style.strokeDasharray = circumference;

    // Calculate dashoffset (smaller value means more filled)
    const dashoffset = circumference - (percentage / 100) * circumference;

    // Set initial position (empty circle)
    scoreCircleProgress.style.strokeDashoffset = circumference;

    // Trigger animation after a small delay to ensure proper rendering
    setTimeout(() => {
      scoreCircleProgress.style.strokeDashoffset = dashoffset;
    }, 100);
  }
}

// Initialize default selections
document.addEventListener("DOMContentLoaded", function () {
  const defaultCountBtn = document.querySelector('.count-btn[data-count="10"]');
  const defaultTimeBtn = document.querySelector('.time-btn[data-time="5"]');

  if (defaultCountBtn) defaultCountBtn.classList.add("selected");
  if (defaultTimeBtn) defaultTimeBtn.classList.add("selected");
});

// Start quiz
startQuizBtn.addEventListener("click", () => {
  // Initialize the quiz with selected settings
  initializeQuiz();

  // Hide setup screen and show quiz screen
  setupScreen.style.display = "none";
  quizScreen.style.display = "block";
  resultsScreen.style.display = "none";
});

// Initialize quiz with selected settings
function initializeQuiz() {
  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;

  // Set timer based on selection (convert minutes to seconds)
  timeLeft = selectedTimer * 60;

  // Prepare questions based on selection
  prepareQuestions();

  // Update total questions display
  totalQuestionsElement.textContent = quizQuestions.length;

  // Update progress bar
  updateProgressBar(0, quizQuestions.length);

  // Start timer if a time limit was selected
  if (selectedTimer > 0) {
    startTimer();
    timerDisplay.style.display = "flex";
  } else {
    timerDisplay.style.display = "none";
  }

  // Load first question
  loadQuestion();
}

// Prepare questions based on user selection
function prepareQuestions() {
  try {
    // Check if questions array exists from questions.js
    if (typeof questions !== "undefined" && Array.isArray(questions)) {
      // If questionCount is null, use all questions
      if (questionCount === null) {
        quizQuestions = [...questions]; // Clone all questions
        return;
      }

      // If there are fewer questions available than requested, use all questions
      if (questions.length <= questionCount) {
        quizQuestions = [...questions];
        return;
      }

      // Otherwise, randomly select the requested number of questions
      quizQuestions = getRandomQuestions(questions, questionCount);
    } else {
      // If questions array doesn't exist, create sample questions for testing
      console.warn(
        "Questions array is undefined. Using sample questions for testing."
      );
      quizQuestions = generateSampleQuestions(questionCount || 10);
    }
  } catch (error) {
    console.error("Error preparing questions:", error);
    quizQuestions = generateSampleQuestions(questionCount || 10);
  }
}

// Generate sample questions for testing when questions.js is missing
function generateSampleQuestions(count) {
  const sampleQuestions = [];
  for (let i = 1; i <= count; i++) {
    sampleQuestions.push({
      question: `Sample Question ${i}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A",
    });
  }
  return sampleQuestions;
}

// Get random questions from the pool
function getRandomQuestions(pool, count) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Start timer
function startTimer() {
  // Clear any existing interval
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // Set initial time display
  updateTimerDisplay();

  // Only start the timer if there's a time limit
  if (selectedTimer > 0) {
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
}

// Update timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  // Add visual indication when time is running out (last minute)
  if (timeLeft <= 60) {
    timerElement.parentElement.classList.add("running-out");
  } else {
    timerElement.parentElement.classList.remove("running-out");
  }
}

// Load question
function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    endQuiz();
    return;
  }

  // Reset answer selected state for new question
  answerSelected = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  nextButton.disabled = true; // Disable next button until an option is selected

  // Update question counter
  currentQuestionNum.textContent = currentQuestionIndex + 1;

  // Update progress bar
  updateProgressBar(currentQuestionIndex + 1, quizQuestions.length);

  // Remove any existing feedback
  const existingFeedback = document.getElementById("feedback-element");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  // Create option buttons
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      if (!answerSelected) {
        // Only allow selection if no answer has been selected yet
        selectOption(button, option);
      }
    });
    optionsElement.appendChild(button);
  });
}

// Handle option selection
function selectOption(buttonElement, option) {
  if (answerSelected) return; // Prevent changing answer if already selected

  // Set answer selected state to true
  answerSelected = true;

  // Enable next button now that an option is selected
  nextButton.disabled = false;

  // Add selection to clicked button
  buttonElement.classList.add("selected");

  // Check if answer is correct
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (option === currentQuestion.answer) {
    score++;
    buttonElement.classList.add("correct"); // Add correct class for styling
    showFeedback("Correct!", true); // Show feedback for correct answer
  } else {
    buttonElement.classList.add("incorrect"); // Add incorrect class for styling

    // Find and highlight the correct answer
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn.textContent === currentQuestion.answer) {
        btn.classList.add("correct");
      }
    });

    showFeedback(
      `Incorrect! The correct answer is: ${currentQuestion.answer}`,
      false
    ); // Show feedback for incorrect answer
  }
}

// Show feedback after selecting an option
function showFeedback(message, isCorrect) {
  // Remove any existing feedback
  const existingFeedback = document.getElementById("feedback-element");
  if (existingFeedback) {
    existingFeedback.remove();
  }

  // Create feedback element
  const feedback = document.createElement("div");
  feedback.id = "feedback-element";
  feedback.textContent = message;
  feedback.style.marginTop = "1rem";
  feedback.style.fontWeight = "500";
  feedback.style.color = isCorrect ? "var(--correct)" : "var(--incorrect)";
  feedback.style.textAlign = "center";

  // Append feedback to the question container
  questionContainer.appendChild(feedback);
}

// Handle next question button
nextButton.addEventListener("click", () => {
  // Only proceed if an option is selected
  if (!answerSelected) {
    return;
  }

  // Move to next question
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

// End quiz
function endQuiz() {
  // Stop timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  // Hide quiz screen and show results screen
  quizScreen.style.display = "none";
  resultsScreen.style.display = "block";

  // Calculate score
  const percentage = Math.round((score / quizQuestions.length) * 100);

  // Update results display
  scoreNumber.textContent = `${score}/${quizQuestions.length}`;
  scorePercent.textContent = `${percentage}%`;
  animateScoreCircle(score, quizQuestions.length);

  // Set feedback message based on score
  if (percentage >= 80) {
    feedbackMessage.textContent = "Excellent! You've mastered this topic.";
    createConfetti();
  } else if (percentage >= 60) {
    feedbackMessage.textContent = "Good job! Keep practicing to improve.";
  } else if (percentage >= 40) {
    feedbackMessage.textContent =
      "Not bad. More practice will help you improve.";
  } else {
    feedbackMessage.textContent =
      "Keep studying! You'll get better with practice.";
  }
}

// Create confetti effect
function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  if (!confettiContainer) return;

  confettiContainer.innerHTML = ""; // Clear any existing confetti

  const colors = ["#6366f1", "#8b5cf6", "#f472b6", "#38bdf8", "#10b981"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 3}s`;
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Restart with same settings
restartBtn.addEventListener("click", () => {
  // Initialize the quiz with current settings
  initializeQuiz();

  // Show quiz screen
  setupScreen.style.display = "none";
  quizScreen.style.display = "block";
  resultsScreen.style.display = "none";
});

// Go back to settings
newSettingsBtn.addEventListener("click", () => {
  // Show setup screen
  setupScreen.style.display = "block";
  quizScreen.style.display = "none";
  resultsScreen.style.display = "none";

  // Stop any running timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

// Create questions.js file if none exists
function checkForQuestionsFile() {
  if (typeof questions === "undefined") {
    console.warn("questions.js might be missing. Creating a mock version.");
    window.questions = generateSampleQuestions(100);
  }
}

// Call this function after a short delay to ensure questions.js has had time to load
setTimeout(checkForQuestionsFile, 500);
