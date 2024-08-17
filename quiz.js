// Array of quiz questions
var quizQuestions = [
    {
        question: "Which of the following is a key objective of SDG5?",
        options: ["Promoting sustainable cities", "Ensuring gender equality", "Reducing poverty levels", "Improving access to clean water"],
        answer: 1
    },

{
   question: "What is the meaning of gender equality?",
   options: ["Treating men and women exactly the same", "Giving men more rights than women", "Providing equal opportunities and rights to all genders", "Promoting women's rights only"],
   answer: 2
},

{
   question: "Gender-based violence refers to violence that:",
   options: ["Only affects men", "Is committed by women against men", "Occurs between people of the same gender", "Is directed at individuals because of their gender"],
   answer: 3
},

{
   question: "Which of the following is an example of gender discrimination?",
   options: ["Ensuring equal pay for equal work", "Providing parental leave for both men and women", "Denying women the right to vote", "Promoting gender diversity in the workplace"],
   answer: 2
},

{
   question: "What does the term 'glass ceiling' refer to?",
   options: ["A physical barrier in the workplace", "An invisible barrier preventing women from advancing in their careers", "A type of discriminatory glass used in office buildings", "A term used to describe female-dominated industries"],
   answer: 1
},
{
question: "Which of the following is an example of gender inequality in education?",
options: ["Equal enrollment rates for boys and girls", "Lower literacy rates among women compared to men", "Equal representation of women in STEM fields", "Equal access to educational resources for all genders"],
answer: 1
},

{
question: "What is the global gender pay gap?",
options: ["Men earning more than women for the same work", "Women earning more than men for the same work", "Equal pay for men and women worldwide", "The difference in average earnings between men and women"],
answer: 3
},

{
question: "Women's political empowerment refers to:",
options: ["Women's involvement in politics and decision-making processes", "Women having more power than men in politics", "Women's domination in political positions", "Women's exclusion from political participation"],
answer: 0
},

{
question: "What is the purpose of affirmative action policies?",
options: ["To give men more opportunities than women", "To promote gender equality in the workplace and education", "To exclude women from certain professions", "To discriminate against men in favor of women"],
answer: 1
},

{
question: "What is the role of men in achieving gender equality?",
options: ["Men are not responsible for promoting gender equality", "Men should support and advocate for gender equality", "Men should only focus on their own rights", "Men should dominate decision-making processes"],
answer: 1
},

{
question: "Which international agreement is often referred to as the 'Bill of Rights' for women?",
options: ["Universal Declaration of Human Rights", "Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)", "Beijing Declaration and Platform for Action", "Sustainable Development Goals (SDGs)"],
answer: 1
},

{
question: "What does the term 'gender mainstreaming' mean?",
options: ["Prioritizing men's rights over women's rights", "Integrating a gender perspective into all policies and programs", "Focusing solely on women's issues", "Excluding men from decision-making processes"],
answer: 1
},

{
question: "Which of the following is an example of gender stereotyping?",
options: ["Recognizing and valuing diverse gender identities", "Treating individuals based on their abilities and skills", "Assigning specific roles and characteristics based on gender", "Promoting equal opportunities for all genders"],
answer: 2
},

{
question: "What is the meaning of the term 'intersectionality'?",
options: ["The interaction between different social identities and systems of oppression", "The belief that gender equality is a standalone issue", "The prioritization of one gender over others", "The exclusion of men from feminist movements"],
answer: 0
},

{
question: "What is the purpose of gender-responsive budgeting?",
options: ["Allocating more funds to men's programs and initiatives", "Integrating a gender perspective into budgetary decisions and allocations", "Excluding women from economic decision-making processes", "Promoting gender-based taxation"],
answer: 1
},
// Add more questions here
];

// Variables to track quiz progress
var currentQuestion = 0;
var rightAnswers = 0;
var wrongAnswers = 0;

// Function to handle option selection
function selectOption(event) {
  var selectedOption = event.target;
  var selectedAnswer = parseInt(selectedOption.dataset.index);
  if (selectedAnswer === quizQuestions[currentQuestion].answer) {
    selectedOption.classList.add("correct");
    rightAnswers++;
  } else {
    selectedOption.classList.add("incorrect");
    var options = document.getElementsByClassName("option");
    for (var i = 0; i < options.length; i++) {
      if (parseInt(options[i].dataset.index) === quizQuestions[currentQuestion].answer) {
        options[i].classList.add("correct");
      }
    }
    wrongAnswers++;
  }
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].removeEventListener("click", selectOption);
  }
  document.getElementById("next-btn").disabled = false;
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = "Right Answers: " + rightAnswers + ", Wrong Answers: " + wrongAnswers;
}

// Function to display the current question
function displayQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  questionElement.textContent = quizQuestions[currentQuestion].question;
  optionsElement.innerHTML = "";
  for (var i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
    var option = document.createElement("div");
    option.textContent = quizQuestions[currentQuestion].options[i];
    option.classList.add("option");
    option.dataset.index = i;
    option.addEventListener("click", selectOption);
    optionsElement.appendChild(option);
  }
  document.getElementById("next-btn").disabled = true;
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = "Right Answers: " + rightAnswers + ", Wrong Answers: " + wrongAnswers;
}

// Function to generate a random question index
function generateRandomQuestionIndex() {
  return Math.floor(Math.random() * quizQuestions.length);
}

// Function to handle next button click
function nextQuestion() {
  currentQuestion = generateRandomQuestionIndex();
  displayQuestion();
}

// Start the quiz by displaying the first question
displayQuestion();

document.getElementById("next-btn").addEventListener("click", nextQuestion);