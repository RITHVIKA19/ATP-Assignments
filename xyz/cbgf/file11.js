// // // new collections: pack of data 
// // // two approcaches
// // // 1.Arrays: pack homogenerous data
// // // 2.Object: pack of properties
// // // 3. Array of objects
// // // Array: ordered collection
//  let marks=[67,78,90,67]// marks is the reference of the array
//  let names=['raju','Ravi']
//  console.log(marks[10])//  udefined
// // // index represents the offset:it represents from the first element
// // // iterate (for-of loop)
//  for(let v of marks)
//  {
//      console.log(v)
//  }
// // // iterate(for-each)-elementary access
// // // object: unordered collection
//  let student={
//    sno:100,
//    name:'Rithvika',// sno,name,age,course must be strings
//    age:19,
//    course:'BTECH',
// // }
// // // access properties
//  console.log(student)
//  console.log(student.sno)
//  console.log(student['sno'])

// // // iterate an object (for-in-loop)
// // for(let v in student)// only returns keys 
// // {
// //    // console.log([student.v])// undefined
// //     //console.log(student[v])
// //     //console.log(student['v'])// print keys
// //     console.log(`${v} is ${student[v]}`)


// // }
// //  Array of objects:// array of object as each element is a object
// let emps=[
//   { eno:1,name:"Rithvika"},
//   { eno:2,name:'Sreemaye'},
//   { eno:3,name:'Nigama'}
// ]
// iterate the emps array and print eno& name of each eno
// eno is 1 and name id xyxx
// for(let v in emps)
// {
//     console.log( `eno is ${emps[v].eno} and ename is ${emps[v].name}`)
// }
let student={
   sno:100,
   firstname:'Rithvika',
   lastname:'sweety',// sno,name,age,course must be strings
   age:19,
   course:'BTECH',
   marks:[90,67,89],
   address:
   {
    city:"hyd",
    pincode:7878787,
   },
   // methods or memberfunctions
  //  getFullName:function(){
  //   return this.firstname+this.lastname
  //  },
   averageMarks:function(){
    let sum=0
    for(let index=0;index<this.marks.length;index++ )
      {
        sum=sum+this.marks[index]/this.marks.length

      }
    
    return sum

   },
 }
// let getfullname=function(){}
// let getlastname=function(){}
//console.log(student.getfullname())// firstname is not defined
console.log(student.averageMarks())
// Basic operations on Array








