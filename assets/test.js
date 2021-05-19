//All required vars//
var introPage = document.getElementById('textcontent')
var questionContent = document.getElementById('questions')
var btn = document.getElementById('btn')
var proceed = document.getElementById('proceedbtn')
var questionEl = document.getElementById('questionslip')
var answerGrid = document.getElementById('selector')
var title = document.getElementById('title')
var intro = document.getElementById('intro')
var highScore = document.getElementById('highScore')

let randomizeQ, currentQ

var timer = document.getElementById('timed')
timeLeft = 30

btn.addEventListener('click', startGame)
proceed.addEventListener('click', () => {
  currentQ++
  nextQ()
})

function startGame() {
    introPage.classList.add('hide')
    randomizeQ = questions.sort(() => Math.random() - .5)
    questionContent.classList.remove('hide')
    currentQ = 0
    nextQ()
    countDown()
}

//--------------------------------------------------------------------------------------------------------------

  
  
function countDown() {
  setInterval(() => {
   
    if(timeLeft <= 0) {
      clearInterval(timeLeft = 0)
    }

    timer.innerHTML = timeLeft
    timeLeft -=1
  }, 1000);
}


function resetTimer() {
  timeLeft = 30;
}

//-------------------------------------------------------------------------------------------------------------

function nextQ() {
    reset()
    nextCard(randomizeQ[currentQ])
    resetTimer()
  }

function nextCard(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('qbtn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerGrid.appendChild(button)
    })
  }


function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    Array.from(answerGrid.children).forEach(button => {
    })
    if (randomizeQ.length > currentQ + 1) {
      proceed.classList.remove('hide')
    } else {
      btn.innerText = 'Restart'
      intro.innerText = 'Your score is 100!'
      introPage.classList.remove('hide')
      questionContent.classList.add('hide')
    }
  }

function reset() {
    proceed.classList.add('hide')
    while (answerGrid.firstChild) {
      answerGrid.removeChild(answerGrid.firstChild)
    }
  }


const questions = [
    {
      question: 'What is used to "Style" HTML?',
      answers: [
        { text: 'CSS', correct: true },
        { text: 'HTML', correct: false },
        { text: 'Java', correct: false},
        { text: 'Javascript', correct: false},
      ]
    },
    {
      question: 'What do you wrap arrays in?',
      answers: [
        { text: '""', correct: true },
        { text: '()', correct: true },
        { text: '[]', correct: true },
        { text: '??', correct: true },
      ]
    },
    {
      question: 'What is does HTML stand for?',
      answers: [
        { text: 'Hypertext Markup Language', correct: true },
        { text: 'Hyperterror module Language', correct: false },
        { text: 'Hipsters thinking much less', correct: false },
        { text: 'Hypertext Module language', correct: false },
      ]
    },
    {
      question: 'When was HTML published?',
      answers: [
        { text: '2000', correct: false },
        { text: '1998', correct: false },
        { text: '1993', correct: true },
        { text: '1985', correct: false }
      ]
    }
  ]
