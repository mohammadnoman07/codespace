let heartIcon = document.querySelector('#heart')
heartIcon.addEventListener('click', (e) => {
  e.target.classList.toggle('red')
})
let playerTime  = document.querySelector('.player-time-range')
let currentTime = document.querySelector('.player-time--left')
playerTime.addEventListener('input', (e) => {
   currentTime.textContent = e.target.value
})

let audio = document.querySelector("audio");

const song = [
  "music/stay.mp3",
  "music/song.mp3",
  "music/mera-dil.mp3",
  "music/unstoppable.mp3"
]

let isPlaying = false;
let index = 0
let playBtn = document.querySelector('#playBtn')
playBtn.addEventListener('click', (e) => {
  if(isPlaying){
    e.target.classList.remove('fa-pause')
    e.target.classList.add('fa-play')
    audio.pause()
    isPlaying = false

  }else{
    audio.src = song[index]
    e.target.classList.remove('fa-play')
    e.target.classList.add('fa-pause')
    audio.play()
    isPlaying=true
  }
})
let nextBtn = document.querySelector('#nextBtn')
nextBtn.addEventListener('click',(e) =>{
  index++
  if(index == song.length-1){
    index = 0
  }
  audio.src = song[index]
  audio.play()
  isPlaying = true
})
let prevBtn = document.querySelector('#prevBtn')
prevBtn.addEventListener('click',(e)=>{
  
  index--
  if(index <= 0 ){
    index = song.length-1
  }
  audio.src= song[index]
  audio.play()
  isPlaying = true
})