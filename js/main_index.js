function cargarPagina(){
    "use strict"

    let barranav=document.querySelector(".btn_menu");
    barranav.addEventListener("click", function(){
        let arr=document.querySelectorAll(".navegadores");
        for (let elem of arr){
            elem.classList.toggle("oculto");
            }
        });
   
    let arreglo_productos={
                "thing":{
                        "precio":2941,
                        "articulo": "Cafetera Goteo",
                        "caracteristicas":"1.8 Litros de capacidad - 14 tazas",
                        "cantidad":"1 (Una)",
                        "pago":"Efectivo,débito,crédito",
                        "envio":"Todo el país"
                    },
        
            };
           
            let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
            let groupID = ' ';
            l
}  
document.addEventListener("DOMContentLoaded", cargarPagina);
