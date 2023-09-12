const name="kishan"
console.log(name + "yadav" + "bhagwan")

const repeCount="23"
console.log(`Hello my name  is ${name} and my repo count is ${repeCount}`);

const newValue = new String("kishan yadav")
console.log(typeof newValue)
console.log(newValue[0])
console.log(newValue.charAt(3)) // charAt number dalo to string value le jo postion
console.log(newValue.toUpperCase())
console.log(newValue.length)
console.log(newValue.indexOf("k")) // indexof mai string pass karo koun se postion pe o string le aye ga
console.log(newValue.lastIndexOf("u")) 
console.log(newValue.substring(0,5)) // 0 se start hoga but 5 value tak nhi aye ga 4 tak hi ya ega
console.log(newValue.slice(-8,4))
const data ="      lastValue    ";
console.log(data)
console.log(data.trim())

const url ="https://hitesh.com/hitesh%20yadav";
console.log(url.replace('%20', '-'))

console.log(url.includes("yadav"))
console.log(url.includes("yadav1"))
console.log(newValue.split(" "))

