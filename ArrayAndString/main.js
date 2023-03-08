const arr = [1,2,3,4,5,6,7,8,9]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// for(let i in arr){
//     console.log("in",arr[i])
// }

// for(let value of arr){
//     console.log("value", value)
// }

// const obj = {
//     name:"muiib",
//     arr1:[1,2,3]
// }
// for(let i in obj){
//     console.log(obj[i])
// }

let sum1 = 0
arr.forEach((value,index)=> {
    sum1+= value
    // console.log(index)
    // console.log(value)
})
console.log(sum1)

console.log(arr)
let sum = 0
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)

const sumReduce = arr.reduce((prev,curr) =>{
   console.log(curr)
},0)

console.log(sumReduce)