let marks=[70,98,65,12]
let min=marks[0]
for(let i=1;i<marks.length;i++)
{
    if(marks[i]<min){
        min=marks[i]
    }
    
}
console.log("smallest element",min)
