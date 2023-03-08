const str = "       hello GGG World"

console.log(str.length)

//Returns the character at the specified index.
console.log(str.charAt(4))

console.log(str[4])

//Returns the Unicode value of the character at the specified location.
console.log(str.charCodeAt(0))
console.log(str.charCodeAt(10))
console.log(str.charCodeAt(12))

//String.codePointAt(pos: number): number | undefined
console.log(str.codePointAt(12))


//Returns a string that contains the concatenation of two or more strings.
console.log(str.concat(" qwerty"))

//Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) 
//starting at endPosition – length(this). Otherwise returns false.
console.log(str.endsWith("hello World"))

//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater
// than or equal to position; otherwise, returns false.
console.log(str.includes('hell'))

console.log(str.indexOf("ll"))

console.log(str.indexOf("l"))

console.log(str.lastIndexOf("l"))

console.log(str.toUpperCase())

console.log(str.toLowerCase())

console.log(str.split(""))

console.log(str.trim())

console.log(str.slice())

console.log(str.startsWith(" "))



