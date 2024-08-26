//array.reduce()
let prices = [5, 10, 15, 20];
let total = prices.reduce(checkout); 
console.log("total is ",total);
function checkout(total,element)
{
return total+element;
}