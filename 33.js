//array.forEach()
let students=["kavya","jonty","bhavya"];
students.forEach(capitalize);
students.forEach(print);
function capitalize(element,index,array){
   array[index]=element[0].toUpperCase()+element.substring(1);
}
//console.log(students[0]);
function print(element){
    console.log(element);
}