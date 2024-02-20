let p = 0;
let l = 0;
let s = 0;
let hd = 0;
let ve = 0;
let total=0;

document.getElementById("b1").onclick = function(){
    p++;
    total+=150;
    document.getElementById("qty").innerHTML=p;
    console.log(total);
}

document.getElementById("b2").onclick = function(){
    l++;
    total+=250;
    document.getElementById("qty1").innerHTML=l;
    console.log(total);
}

document.getElementById("b3").onclick = function(){
    s++;
    total+=350;
    document.getElementById("qty2").innerHTML=s;
    console.log(total);
}

document.getElementById("b4").onclick = function(){
    hd++;
    total+=400;
    document.getElementById("qty3").innerHTML=hd;
    console.log(total);
}

document.getElementById("b5").onclick = function(){
    ve++;
    total+=450;
    document.getElementById("qty4").innerHTML=ve;
    console.log(total);
}

document.getElementById("checkout").onclick=function(){
    document.getElementById("payable").innerHTML="Grand Total : "+total;
}