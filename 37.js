let grades=[100,56,45,82];
grades=grades.sort(descendingsort);
grades.forEach(print);
function  descendingsort(x,y)
{
    return y-x;
}
function ascendingsort(x,y)
{
    return x-y;
}
function print(element)
{
    console.log(element);
}