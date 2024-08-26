//array of objects
class Car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }
    drive()
    {
        console.log("driving ",this.model);
    }
}
const car1=new Car("bmw",2020,"red");
const car2=new Car("ford",2019,"blue");
const car3=new Car("honda",2018,"green");

const cars =[car1,car2,car3];
/*console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

cars[0].drive();
cars[1].drive();
cars[2].drive();*/
startrace(cars);

function startrace(cars)
{
    for(const car of cars){
        car.drive();
    }
}