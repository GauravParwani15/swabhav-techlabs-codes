(function(){

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const Questions = [
    { question: "Who invented JavaScript?",  answers: {  a: "Douglas Crockford",  b: "Sheryl Sandberg",  c: "Brendan Eich"  },  correctAnswer: "c"},
    {  question: "Which one of these is a JavaScript package manager?",  answers: { a: "Node.js", b: "TypeScript", c: "npm"}, correctAnswer: "c"},
    {  question: "Which tool can you use to ensure code quality?",  answers: { a: "Angular", b: "jQuery", c: "RequireJS", d: "ESLint" }, correctAnswer: "d"},
    {  question: "Which tag is used to add an header in HTML5 table?",  answers: { a: "theader", b: "h1", c: "th", d: "header"}, correctAnswer: "c"},
    {  question: "How many attributes are there in HTML5?",  answers: { a: "2", b: "4", c: "1", d: "5"}, correctAnswer: "a"}
  ];

  function buildQuiz(){
    const output = [];
    Questions.forEach(
      function(currentQuestion,questionNumber) {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}" >
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="question"> ${questionNumber+1}) ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }


  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    Questions.forEach( function(currentQuestion,questionNumber) {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${Questions.length}`;
    resultsContainer.innerHTML= `You scored ${(numCorrect/Questions.length)*100}%`;
  }


  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }


  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
