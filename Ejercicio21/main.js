
function correr(){
    claseCorredor("corredor");
    setTimeout(function(){
        window.open("index2.html","_self");
        },5000
    )
}

function claseCorredor(txt){
    document.getElementById(txt).classList.add("corredor");
}


function caida(){
    claseCorredor("caida");
    setTimeout(function(){
        document.getElementById("caida").setAttribute("src","img/herido.png");
        document.getElementById("caida").classList.add("herido");
        },5000
    )
}