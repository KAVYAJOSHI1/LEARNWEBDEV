// execption handling
try{
    let x=window.prompt("Enter a number");
    x=Number(x);
    if(isNaN(x)) throw "Not a number";
    if(x=="") throw "Empty";
    console.log(x , " is a number");
}
catch (err){
    console.log(err);
}
finally{
    console.log("done");
}