//get
//set
class Car{
    constructor(power){
        this._power=power;
    }
    get power()
    {
        return `${this._power}hp`;
    }
    set power(power)
    {
        this._power=power;
    }
}
let car=new Car(200);
car.power="20";
console.log(car.power);