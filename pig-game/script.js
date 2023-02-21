let scoreEl =  document.querySelectorAll('.score')

let dice = document.querySelector('.dice')
let resetEl = document.querySelector('.btn--new')

resetEl.addEventListener('click',function (){
    scoreEl[0].textContent = 0
    scoreEl[1].textContent = 0
    dice.classList.add('hide')
    
})

let roll = document.querySelector('.btn--roll')
roll.addEventListener('click',function (){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    dice.classList.remove('hide')
    dice.src = 'dice-'+randomNumber+'.png'

})