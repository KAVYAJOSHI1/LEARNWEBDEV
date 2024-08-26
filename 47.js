//constructor

class student{
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
    study(){
        console.log(this.name,"is studying");
    }
}
const s1=new student("kavya",19,9);
s1.study();
