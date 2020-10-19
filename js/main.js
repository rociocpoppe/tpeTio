
function cargarPagina(){
    "use strict"
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
    let groupID = '145-Walter-Poppe';
    let collectionID = 'productosregaleria';
    let editarid;

    /*function cargarenAPi(){
        fetch(baseURL + groupID + "/" + collectionID, {
            "method": "POST",
            "mode": 'cors',
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(arreglo_productos)
        }).then(function(r){
            if(!r.ok){
            console.log("error")
            }
            return r.json()
        })
        .catch(function(e){
            console.log(e)
        })
        
    }
         
    cargarenAPi(); */

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
   function editarModal(button){
        let id = button.toElement.id.substr(10, 100);
        let id_tr = "#tr-"+id;
        let tds = document.querySelector(id_tr).childNodes;
       // document.querySelector('#modalModificar').modal("show");
        console.log(tds[0].innerHTML);
        document.querySelector("#precio-modif").value = tds[0].innerHTML;
        document.querySelector("#articulo-modif").value = tds[1].innerHTML;
        document.querySelector("#caracteristicas-modif").value = tds[2].innerHTML;
        document.querySelector("#cantidad-modif").value = tds[3].innerHTML;
        document.querySelector("#pago-modif").value = tds[4].innerHTML;
        document.querySelector("#envio-modif").value = tds[5].innerHTML;
        document.querySelector("#id-modificacion").value = id;
   }
   function editarprod(button){
        console.log("entre a editar");
        let precio = document.querySelector("#precio-modif").value;
        let art=document.querySelector("#articulo-modif").value;
        let caract=document.querySelector("#caracteristicas-modif").value;
        let cant=document.querySelector("#cantidad-modif").value;
        let pago=document.querySelector("#pago-modif").value;
        let envio=document.querySelector("#envio-modif").value;
       
        if(precio.length === 0 || art.length === 0 || caract.length===0 || cant.length===0|| pago.length===0|| envio.length===0 ) { 
          document.querySelector("#resultado").innerHTML = "Ingrese los datos solicitados";
          return;
        }
        let data = {
          "thing": {
            "precio": precio,
            "articulo": art,
            "caracteristicas":caract,
            "cantidad":cant,
            "pago":pago,
            "envio":envio
          }
        };
        let id = document.querySelector("#id-modificacion").value;
        console.log(id);
        fetch(baseURL + groupID + "/" + collectionID +"/" + id,{
            method: "PUT",
            mode: "cors",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(data)
        })
        .then (function (r){
            if(!r.ok){
                console.log("error")
            }
            else{
                return r.json();
                
            }
            })
            .then (function (json){
                obtenerdatos();
            })
            .catch(function(e){
                console.log(e);
            })
   }
    
   document.querySelector("#button-modificar").addEventListener('click', editarprod);
   function borrarprod(button){ 
       console.log("entre a borrar");
        fetch(baseURL + groupID + "/" + collectionID +"/" + button.toElement.id,{
            method: "DELETE",
            mode: "cors"
        })
        .then (function (r){
            if(!r.ok){
                console.log("error")
            }
            else{
                return r.json();
                
            }
            })
            .then (function (json){
                obtenerdatos();
            })
            .catch(function(e){
                console.log(e);
            })
    }

    


 



    function guardardataform(){
        let precio = document.querySelector("#precio").value;
        let art=document.querySelector("#articulo").value;
        let caract=document.querySelector("#caracteristicas").value;
        let cant=document.querySelector("#cantidad").value;
        let pago=document.querySelector("#pago").value;
        let envio=document.querySelector("#envio").value;
       
        if(precio.length === 0 || art.length === 0 || caract.length===0 || cant.length===0|| pago.length===0|| envio.length===0 ) { 
          document.querySelector("#result").innerHTML = "Ingrese los datos solicitados";
          return;
        }
        
        let data = {
          "thing": {
            "precio": precio,
            "articulo": art,
            "caracteristicas":caract,
            "cantidad":cant,
            "pago":pago,
            "envio":envio
          }
        };
        fetch(baseURL + groupID + "/" + collectionID, {
            "method": "POST",
            "mode": 'cors',
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(data)
          }).then(function(r){
            if(!r.ok){
              console.log("Error")
            }
            return r.json()
          })
          .then(function(json) {
            obtenerdatos();
          })
          .catch(function(e){
            console.log(e)
          })
          
        }
        
        document.querySelector("#cargardatos").addEventListener('click', guardardataform);
        
        function cargarvarios(){
            for(let i=0; i<3; i++){
                guardardataform();
            } 
          
        }
        let btnvarios= document.querySelector("#cargarvarios").addEventListener("click",cargarvarios);

        function buscar() {
            console.log("entre a buscar");
            let tabla = document.querySelectorAll('table');
            let busqueda = document.getElementById('buscar').value.toLowerCase();
            let encontrado=false;
            for (let i = 0; i < tabla.length; i++) {
                let celdasfila= tabla[i].getElementsByClassName('busqueda');
                for (let j = 0; j < celdasfila.length && !encontrado; j++) { 
                    let td = celdasfila[j];
                    let textoAcomparar = td.innerHTML.toLowerCase(); 
                    if (busqueda.length != 0 && textoAcomparar != busqueda){
                        td.parentNode.hidden=true;
                    }
                }

            }
        }
               
        document.querySelector("#btnbuscar").addEventListener("click", buscar);

        function reset(){
            console.log("entre a buscar");
            let tabla = document.querySelectorAll('table');
            let busqueda = document.getElementById('buscar').value.toLowerCase();
            let encontrado=false;
            for (let i = 0; i < tabla.length; i++) {
                let celdasfila= tabla[i].getElementsByClassName('busqueda');
                for (let j = 0; j < celdasfila.length && !encontrado; j++) { 
                    let td = celdasfila[j];
                    td.parentNode.hidden=false;
                    
                }

            }
        }
        document.querySelector("#reset").addEventListener("click", reset);

}document.addEventListener("DOMContentLoaded", cargarPagina);