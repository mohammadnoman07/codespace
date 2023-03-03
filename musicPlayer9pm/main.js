let audioEl = document.querySelector("audio")

console.log(audioEl)


let playBtn = document.querySelector('#playBtn')
let isPlaying = false
playBtn.addEventListener('click',(e)=>{
    if(isPlaying){
        audioEl.pause()
        isPlaying = false
        e.target.classList.remove('fa-circle-pause')
        e.target.classList.add('fa-circle-play')
       
    }
    else{
        audioEl.play()
        isPlaying=true
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
    }
})