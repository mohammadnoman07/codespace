let depositeEl = document.querySelector('#depositAmount')
let finalAmount = document.querySelector('#finalAmount')
let currencyEl = document.querySelector('#currency')
let depositSign = document.querySelector('#depositSign')
let rangeEl = document.querySelector('#range')



let amount = 0
let currency = `$`
finalAmount.textContent =`${amount} ${currency}`
console.log(depositeEl)
// depositeEl.addEventListener('change',  function() {

// })

depositeEl.addEventListener('input',  (e) => {
    amount = e.target.value
    finalAmount.textContent =`${amount} ${currency}`
})

currencyEl.addEventListener('change',(e) =>{
    currency=  e.target.value
    depositSign.textContent = currency
    finalAmount.textContent =`${amount} ${currency}`
})

rangeEl.addEventListener('input',(e)=>{
    console.log(e.target.value)
})