let idli = 0;
let dosa=0;
let vada=0;
let poori=0;
let pongal=0;
let total=0;

document.getElementById("b1").onclick = function(){
    idli++;
    total+=50;
    document.getElementById("qty").innerHTML=idli;
    console.log(total);
}

document.getElementById("b2").onclick = function(){
    dosa++;
    total+=100;
    document.getElementById("qty1").innerHTML=dosa;
    console.log(total);
}

document.getElementById("b3").onclick = function(){
    vada++;
    total+=20;
    document.getElementById("qty2").innerHTML=vada;
    console.log(total);
}

document.getElementById("b4").onclick = function(){
    poori++;
    total+=100;
    document.getElementById("qty3").innerHTML=poori;
    console.log(total);
}

document.getElementById("b5").onclick = function(){
    pongal++;
    total+=300;
    document.getElementById("qty4").innerHTML=pongal;
    console.log(total);
}

document.getElementById("checkout").onclick=function(){
    document.getElementById("payable").innerHTML="Grand Total : "+total;
}