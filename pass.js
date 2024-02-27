const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const user_name = document.getElementById("user_Name");
const user_email = document.getElementById("user_email");


// add - none
const weakAdd = () =>{document.querySelector(".weak").classList.add("none")};
const midAdd = ()=> document.querySelector(".medium").classList.add("none");
const strongAdd = ()=> document.querySelector (".Strong").classList.add("none");
const zeroPassAdd = () =>document.querySelector(".zeroPassErr").classList.add("none");
const errshortAdd = () => document.querySelector(".errshort").classList.add("none");
const errlongAdd = () =>document.querySelector(".errlong").classList.add("none");



// remove none
const weakRemove = () => document.querySelector(".weak").classList.remove("none");
const midRemove = () => document.querySelector(".medium").classList.remove("none");
const StrongRemove = () => document.querySelector(".Strong").classList.remove("none");
const zeroPassRemove = () => document.querySelector(".zeroPassErr").classList.remove("none");
const errshortRemove = () => document.querySelector(".errshort").classList.remove("none");
const errlongRemove = () =>document.querySelector(".errlong").classList.remove("none");



const disablePsw = () => {
    document.getElementById("pass2").disabled = true;
}
const enablePsw = () =>{
    document.getElementById("pass2").disabled = false;
}
if(pass1.value.length == 0){
    disablePsw()
}


function passchecker(){
    console.log(pass1.value)
    if( pass1.value.length >= 6 && pass1.value.length <=9){
        console.log("Hello World");
        weakRemove();
        errshortAdd();
        zeroPassAdd();
        errlongAdd();
        midAdd();
        enablePsw();
    }
    else if(pass1.value.length >= 10 && pass1.value.length <= 13){
        // For Weak
        midRemove();
        errlongAdd();
        strongAdd();
        enablePsw();
    }
    else if(pass1.value.length >=14 && pass1.value.length <= 22){
        console.log("Hard Password");
        errshortAdd();
        StrongRemove();        
        errlongAdd();    
        enablePsw();
    }
    else if (pass1.value.length >= 23){
        console.log("long Password");
        zeroPassAdd();
        errlongRemove();
        weakAdd();
        midAdd();
        strongAdd();
        disablePsw();
    }
    else if(pass1.value.length == 0){
        zeroPassRemove();
        errshortAdd();
        weakAdd();
        midAdd();
        errlongAdd();
    }
    else {
        console.log("Pass is Invalid or to short");   
        weakAdd();
        midAdd();
        strongAdd(); 
        zeroPassAdd();
        errshortRemove();
        errlongAdd();
        disablePsw();
    }
    
}



function passMatch(){
    if(pass1.value == pass2.value){
        console.log("Pass was matched");
        document.querySelector(".Match").classList.remove("none");        
        document.querySelector(".notMatch").classList.add("none");
        strongAdd()
        weakAdd()
        midAdd()
    }
    else{
        console.log("Pass not matched")
        document.querySelector(".Match").classList.add("none"); 
        document.querySelector(".notMatch").classList.remove("none");
        setTimeout(() => {
            weakAdd()
            midAdd()
            strongAdd()
        }, 2000);
    }
}