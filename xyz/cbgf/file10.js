// let createGame=function(level)
// {
//     return function(nameofplayer)
//     {
//         console.log(`Hello ${nameofplayer},you are at level ${level}`)
//     }
// }
// let level1=createGame(1)
// level1('ravi')
// callfunction is a function taht passes as arg in another function
// let makepayment=function(amount,paymenttype)
// {
//     console.log(`payment of ${amount} started`)
//     paymenttype()
// }
// let upipayment=function()
// {
//     console.log("UPI payment done")
// }
// let cardpayment=function()
// {
//     console.log("card payment done")


// }
// makepayment(2000,upipayment)
// makepayment(500,cardpayment)
// functions are first calss of javascript
//  A function can
//  store in a varaiable
// can return another function
// can receive a function as arg

let sum=function(x)
{
    return function(y)// anonymous function 
    {
        return x+y;// these are primitive array and object stores in heap
    }
}
let result=sum(10)
console.log(result(20))// not defined
// closure: it is feature  it  a local variable its scope is until the function exceutes 
// After the x is removed from the memory closure comes into the action its a extra power  it is temporary stored in the heap memoy
// whem function returns another function-closure is enabled
// global scope
let a=10
function test()// functoion scope
{
    let b=20
    if(true){// block scope
        let c=30// shorter lifetime 
    }
}
// Every javascript function has closure by default because of this closure property the variables of outside scope will be maintained temporary in heap
// even the outside function execution is completed 
// new collections: pack of data 
// 1.Arrays
// 2.Object
// 3. Array of objects

