//async

async function myfunction(){
    let fileloaded=true;
    if(fileloaded)
    {
        return "file loaded";
    }
    else
    {
        throw new Error("file not loaded");
    }
}
myfunction().then(value=>console.log(value)).catch(error=>console.log(error));