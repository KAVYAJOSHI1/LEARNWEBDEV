//object
const car={
    model:"bmw",
    color:"red",
    year:2020,
    drive:function(){
        console.log("You drive the car");

    },
    brake:function(){
        console.log("You stop the car");
    },
}

console.log(car.model);
console.log(car.color);
car.drive();
car.brake();