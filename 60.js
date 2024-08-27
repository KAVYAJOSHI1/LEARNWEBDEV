//promise

let fileloaded=false;
const promise=new Promise((resolve,reject)=>{
    if(fileloaded)
    {
        resolve("file loaded");
    }
    else
    {
        reject("file not loaded");
    }
});

promise.then(value=>console.log(value)).catch(error=>console.log(error));