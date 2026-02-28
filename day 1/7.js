function bigNumber(a,b,c){
    let large=(a>b)?(a>c?a:c):(b>c?b:c)
    return large
}
let big=bigNumber(90000,987,78)
console.log("big number",big)