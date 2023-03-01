let heartIcon = document.querySelector('#heart')
heartIcon.addEventListener('click', (e) => {


  e.target.classList.toggle('red')
   
})
let playerTime  = document.querySelector('.player-time-range')
let currentTime = document.querySelector('.player-time--left')
playerTime.addEventListener('input', (e) => {
   currentTime.textContent = e.target.value
})

document.querySelector('.fa-play')
