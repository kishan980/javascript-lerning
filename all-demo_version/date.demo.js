// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.getTimezoneOffset())


// let myCreatedDate = new Date(2023 ,0, 23)
// let myCreatedDate = new Date(2023 ,0, 23, 5, 3)
// let myCreatedDate = new Date("2023-1-14")
// console.log(myCreatedDate)

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.getTime())

// let myTimeStamp =Date.now();
// console.log(myTimeStamp)

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))

// console.log(Date.now()+1)

// let myDate = new Date();
// console.log(myDate.getDate())
// console.log(myDate.getDate()+1)
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth())


const date1 = new Date("December 15, 2022")
const date2 = new Date("December 16,2022")

if(date1 < date2){
    console.log("big date 2")

} else if(date1>date2){
    console.log("big date1")
} else {
    console.log("both date are same")
}

if(date1 === date2){
    console.log("are same ")
}else {
    console.log("are not same")
}