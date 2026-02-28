
function search(key)
{
    let marks=[90,78,89,45]
    for(let index=0;index<marks.length;index++)
    {
        
        if(marks[index]==key)
        {
            console.log("The index is",index)
            return;
        }
    }
    console.log("not found")
}
search(100);
