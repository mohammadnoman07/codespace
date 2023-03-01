
let score = [0,0]
let activePlayer = 0
score[activePlayer] += 5
activePlayer = activePlayer == 0 ?1 :0
score[activePlayer] +=10
console.log(score)