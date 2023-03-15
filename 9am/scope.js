let a = 2
{
    let a = 5
    console.log("inner",a) // 5
}
console.log("outer a ",a) //2

var b = 3
{
    var b = 5
    console.log("inner b",b)
}
console.log("outer b",b)