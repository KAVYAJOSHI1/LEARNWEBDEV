//nested function


let username="kavya";
let userinbox=0;
login();

function login(){

    displayusername();
    displayinbox();

}
function displayusername(){
    console.log(`Welcome $(username)`);
}
function displayinbox(){
    console.log(`you have $(userinbox) messages`);

}