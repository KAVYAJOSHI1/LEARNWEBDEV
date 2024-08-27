//await

async function myfunction(){

    let fileloaded=false;

    if(fileloaded)
    {
        return "file loaded";
    }
    else    
    {
        throw new Error("file not loaded");
    }
}
async function main()
{
    try{
let message =await myfunction();
console.log(message)
    }
    catch(error)
    {
        console.log(error);
    }
}
main()