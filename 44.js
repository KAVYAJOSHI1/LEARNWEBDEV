//map holds key value pair
const store=new Map([
["shirt",20],
["pants",30],
["shoes",50],
])
let shoppingcart=0;
shoppingcart+=store.get("shirt");
shoppingcart+=store.get("pants");
console.log(shoppingcart);
store.set("hat",20);
store.delete("shoes");
console.log(store.has("pants"));
console.log(store.size);
store.forEach((value,key)=>console.log(key,value));
