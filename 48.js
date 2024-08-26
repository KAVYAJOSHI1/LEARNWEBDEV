//static
class Car
{
    static count=0;
    constructor(model)
    {
        this.model=model;
        Car.count++;
    }
}

let car1=new Car("BMW");

let car2=new Car("AUDI");
console.log(Car.count);