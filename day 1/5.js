let sum1=0
function sum(a){
    for(let i=0;i<a.length;i++) {
        sum1=sum1+a[i]
    }
    return sum1
}
let result=sum([34,56,78,90])
console.log("sum is",result)