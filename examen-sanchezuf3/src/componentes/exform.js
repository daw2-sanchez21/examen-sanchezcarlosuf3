import { cervezas } from '../bd/bd'
export const exform = {
    template:  ` <div class='container'>
    <div class="row">
    <div class="col-6">
    <form id="form-id">
     <div class="mb-3" id="div">
       <label for="InputNombre" class="form-label">Nombre del grupo</label>
       <input type="text" class="form-control" id="Id-nombre" aria-describedby="emailHelp">
     </div>
     <div class="mb-3">
       <label for="InputFecha" class="form-label">Mesa</label>
       <input type="text" class="form-control" id="Id-mesa">
     </div>
     <div class="mb-3">
       <select id="Id-select">
            
       </select>
     </div>
     <div class="mb-3">
       <label for="InputFecha" class="form-label">¿Cuantas te traigo?</label>
       <input type="text" class="form-control" id="Id-cantidad">
     </div>
     <button type="submit" id="Id-boton" class="btn btn-primary">Submit</button>
     </div>
     <div class="col-6">
   </form><div><div id="ficha"><h3>Datos del jugador</h3><ul id="datos"></ul></div><table><tr id="table-id"></tr></table>
   </div>

   <div class="container-fluid">
   <div class="row col-12">
   <div class="col-2 bg-dark">Holas</div>
   </div></div`,
   script: ()=>{
    console.log(cervezas);
    const arraycervezas=[];
    cervezas.forEach(c =>{
        const cont = 0;
        arraycervezas[cont]=c;
        console.log(arraycervezas[cont]);
        cont=cont+1;
    })

    console.log('Vista prueba cargada');
    const select = document.querySelector('#Id-select');
    const arraydatos=[];
    arraydatos[0] = "Cerveza 1";
    arraydatos[1] = "Cerveza 2";
    arraydatos[2] = "Cerveza 3";
    arraydatos[3] = "Cerveza 4";

    arraydatos.forEach(e => {
        const op = document.createElement('option');
        op.value= "gola";
        op.text="gola";
        select.appendChild(op);


    })


    const form = document.getElementById('form-id');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const arraydatos=[];
        const nombre = document.getElementById('Id-nombre');
        const mesa = document.getElementById('Id-mesa');
        const cantidad = document.getElementById('Id-cantidad');

        console.log(nombre.value);
        console.log(mesa.value);
        console.log(select.value);
        console.log(cantidad.value);


        


    })

   }
   
 
 
 }