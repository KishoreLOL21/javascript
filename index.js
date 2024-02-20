let margerita = 0;
let pp=0;
let sbc=0;
let tc=0;
let vp=0;
let total=0;

document.getElementById("b1").onclick = function(){
    margerita++;
    total+=150;
    document.getElementById("qty").innerHTML=margerita;
    console.log(total);
}

document.getElementById("b2").onclick = function(){
    pp++;
    total+=350;
    document.getElementById("qty1").innerHTML=pp;
    console.log(total);
}

document.getElementById("b3").onclick = function(){
    sbc++;
    total+=400;
    document.getElementById("qty2").innerHTML=sbc;
    console.log(total);
}

document.getElementById("b4").onclick = function(){
    tc++;
    total+=300;
    document.getElementById("qty3").innerHTML=tc;
    console.log(total);
}

document.getElementById("b5").onclick = function(){
    vp++;
    total+=300;
    document.getElementById("qty4").innerHTML=vp;
    console.log(total);
}

document.getElementById("checkout").onclick=function(){
    document.getElementById("payable").innerHTML="Grand Total : "+total;
}