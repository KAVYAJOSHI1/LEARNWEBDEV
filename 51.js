//obj as arguments

class Car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }
}
const car1=new Car("bmw",2020,"red");
const car2=new Car("ford",2019,"blue");
const car3=new Car("honda",2018,"green");

display(car1);
function display(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}