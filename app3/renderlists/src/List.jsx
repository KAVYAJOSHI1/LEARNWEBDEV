function List()
{
 const fruits= [{id:1,name:"apple",calories:95 },
    {id:2,name:"orange",calories:35},
    {id:3,name:"banana",calories:87},
    {id:4,name:"coconut",calories:10},
    {id:5,name:"pineapple",calories:82}];
 //APHABETICALLY fruits.sort((a,b) => a.name.localeCompare(b.name));
 //REVERSE APHABETICALLY fruits.sort((a,b) => b.name.localeCompare(a.name));
 fruits.sort((a,b) => b.calories - a.calories);
 const listItems =fruits.map(fruit =><li key={fruit.id}>
                                       {fruit.name}:&nbsp;
                                       <b>{fruit.calories}</b></li>);
 return(<ol>{listItems}</ol>);
}
export default List