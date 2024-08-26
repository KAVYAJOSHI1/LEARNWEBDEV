//2D arrays

let fruit= ["apple","mango","banana"];
let vegetable=["potato","onion","brinjal"];
let meats=["chicken","beef","lamb"];
let food=[fruit,vegetable,meats];
food[0][0]="orange";
for(let list of food)
{
    for(let a of list)
    {
    console.log(list);
    }
}
