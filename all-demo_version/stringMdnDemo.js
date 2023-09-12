const string1 ="A string primitive"
const string2 = "Also a string primitive"
const string3 =`Yet another string primitive`

const string4 = new String("A String Object")

console.log(string1,"1")
console.log(string2,"2")
console.log(string3,"3")
console.log(string4,"4")

// const data ="data";
console.log(string4.charAt(0),"charAt")


const str1 ="hello";
const str2 ="world";
console.log(str1.concat(' ', str2))
console.log("ok",typeof str1.concat(' , ', str2))


const Data="love body yadav"
console.log(Data.includes("body"))

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';

console.log(paragraph.indexOf("kishan"))


const mood ="notHappy! "
console.log(`i feel ${mood.repeat( 3 , " ")}`)

const p =`The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?`;
console.log(p.replace("dog", "mokey"))
console.log(p.replace("dog","kishan yadav"))
console.log(p.replaceAll("dog", "yadav"))

console.log(p.split(" "))

const str = 'The quick brown fox jumps over the lazy dog.';
const worldss = str.split(' ')
const chars = str.split("")
console.log(worldss[2])
console.log(chars[8])
const data = str.split()
console.log(data)

const strData = 'The quick brown fox jumps over the lazy dog.';
console.log(strData.slice(31))
console.log(strData.slice(0 ,31))

console.log("-",strData.slice(-4))
console.log(strData.slice(-9, -5))

const subStrindata ="kishan"
console.log(subStrindata.substring(1,5))


const stringObj = new String("dataAdd")
console.log(typeof stringObj)
console.log(typeof stringObj.toString())
console.log( stringObj.length
    )