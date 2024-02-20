let chapathi = 0;
let ap=0;
let pp=0;
let kp=0;
let cm=0;
let total=0;

document.getElementById("b1").onclick = function(){
    chapathi++;
    total+=50;
    document.getElementById("qty").innerHTML=chapathi;
    console.log(total);
}

document.getElementById("b2").onclick = function(){
    ap++;
    total+=150;
    document.getElementById("qty1").innerHTML=ap;
    console.log(total);
}

document.getElementById("b3").onclick = function(){
    pp++;
    total+=120;
    document.getElementById("qty2").innerHTML=pp;
    console.log(total);
}

document.getElementById("b4").onclick = function(){
    kp++;
    total+=30;
    document.getElementById("qty3").innerHTML=kp;
    console.log(total);
}

document.getElementById("b5").onclick = function(){
    cm++;
    total+=300;
    document.getElementById("qty4").innerHTML=cm;
    console.log(total);
}

document.getElementById("checkout").onclick=function(){
    document.getElementById("payable").innerHTML="Grand Total : "+total;
}