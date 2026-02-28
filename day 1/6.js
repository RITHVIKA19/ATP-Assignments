


let marks=[89,89,76,67]
function search(a){
    for(let i=0;i<marks.length;i++) {
        if(marks[i]==a) {
            return i
        }
            
        }
        return "not found"
    }

let result=search(900)
console.log("Index of element",result)
