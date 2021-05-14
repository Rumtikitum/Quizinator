var introPage = document.getElementById('textcontent')
var questionContent = document.getElementById('questions')
var btn = document.getElementById('btn')
var proceed = document.getElementById('proceedbtn')
var questionEl = document.getElementById('questionslip')
var answerGrid = document.getElementById('selector')
var title = document.getElementById('title')
var intro = document.getElementById('intro')


let shuffledQuestions, currentQuestionIndex

btn.addEventListener('click', startGame)
proceed.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    introPage.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContent.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }

function showQuestion(question) {
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


function resetState() {
    clearStatusClass(document.body)
    proceed.classList.add('hide')
    while (answerGrid.firstChild) {
      answerGrid.removeChild(answerGrid.firstChild)
    }
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerGrid.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      proceed.classList.remove('hide')
    } else {
      btn.innerText = 'Restart'
      intro.innerText = 'Wow, who knew you knew that much. Now take your score, share this with your friends and see who knows the most!'
      introPage.classList.remove('hide')
      questionContent.classList.add('hide')
    }
  }


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }


function clearStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
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
