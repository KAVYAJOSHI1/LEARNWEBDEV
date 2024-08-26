//inheritence


class Animal{
    alive=true;

    eat(){
        console.log("eating");
    }

    sleep(){
        console.log("sleeping");
    }
}
class Rabbit extends Animal{
   
    name="rabbit";
    run()
    {
        console.log("running");
    }
}
class Fish extends Animal{
    
    name="fish";
    swim()
    {
        console.log("swimming");
    }

}
const rabbit=new Rabbit();
const fish=new Fish();
console.log(rabbit.alive);
rabbit.eat();
rabbit.run();
console.log(fish.alive);
fish.eat();
fish.swim();