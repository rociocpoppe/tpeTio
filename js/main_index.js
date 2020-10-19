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
 
            function obtenerdatos(){
        
                let container=document.querySelector("tbody");
                fetch(baseURL + groupID + "/" + collectionID ,{
                    method: "GET",
                    mode: "cors"
                 })
                .then (function (r){
                    if(!r.ok){
                        console.log("error")
                    }
                    else{
                         return r.json()  
                    }
                    })
                    .then (function (json){
                        container.innerHTML = "";
                        for (let data of json.productosregaleria){
                            console.log(data.thing);
                            container.innerHTML+='<tr id="tr-'+data._id+'">' + '<td>'+data.thing.precio + '</td>' + '<td class="' + 'busqueda">'+data.thing.articulo + '</td>'+ '<td>'+data.thing.caracteristicas + '</td>'+ '<td>'+data.thing.cantidad + '</td>'+ '<td>'+data.thing.pago + '</td>'+ '<td>'+data.thing.envio + '</td>' + '<td><button class="borrar" id="'+data._id+'">Eliminar</button></td>' +'<td><button class="editar" id="modificar-'+data._id+'"  data-toggle="modal" data-target="#exampleModal" >Editar</button></td>'+'</tr>';
                        }
                        let btnsborrar = document.querySelectorAll(".borrar");
                        for(let i = 0; i < btnsborrar.length; i++){
                            btnsborrar[i].addEventListener("click", borrarprod);
                        }
                        let btnseditar = document.querySelectorAll(".editar");
                        for(let i = 0; i < btnseditar.length; i++){
                            btnseditar[i].addEventListener("click", editarModal);
                        }
                   
                    })
                    .catch(function(e){
                       console.log(e);
                    })
            }
        
           obtenerdatos();
}  
document.addEventListener("DOMContentLoaded", cargarPagina);
