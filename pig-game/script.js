let score0 = document.querySelector('#score--0')
let score1 = document.querySelector('#score--1')

let btnNew = document.querySelector('.btn--new')
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
let dice = document.querySelector('.dice')
let current = document.querySelector('#current--0')

function reset(){
    score0.textContent = 0
    score1.textContent = 0
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    dice.classList.add('hidden')
}
btnNew.addEventListener('click',reset)

let rollBtn = document.querySelector('.btn--roll')
let currentScore = 0
rollBtn.addEventListener('click',function (){
    dice.classList.remove('hidden')
    let randInt = Math.floor(Math.random()*6+1)
    currentScore+=randInt
    current.textContent = currentScore
    
    dice.src = 'dice-'+randInt+'.png'
})