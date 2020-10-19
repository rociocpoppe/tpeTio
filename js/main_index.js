function cargarPagina(){
    "use strict"

    let barranav=document.querySelector(".btn_menu");
    barranav.addEventListener("click", function(){
        let arr=document.querySelectorAll(".navegadores");
        for (let elem of arr){
            elem.classList.toggle("oculto");
            }
        });
    
}  
document.addEventListener("DOMContentLoaded", cargarPagina);
