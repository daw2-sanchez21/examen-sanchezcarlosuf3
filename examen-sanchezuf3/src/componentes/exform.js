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
   </form><div><div id="ficha"><h3>Cerveza</h3><ul id="datos"></ul></div>
   </div>
    </div>
   <div class="container mt-4">
   <div class="row col-12 border-bottom">
   <table>
      <thead>
        <tr>
          <th>Cerveza</th>
          <th>Cantidad</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody id="tabla-pedidos">

      </tbody>
    </table>
    </div>
   </div>
   </div>`,
   script: ()=>{
    //console.log(cervezas);
    const arraycervezas=[];
    const todasLasCervezas = cervezas.slice();
    
    console.log(todasLasCervezas[1]);
  
    console.log('Vista prueba cargada');
    const select = document.querySelector('#Id-select');
    
    let cont=0;
    todasLasCervezas.forEach(e => {
        const op = document.createElement('option');
        op.value= e.nombre;
        op.text=e.nombre;
        op.id=e.id;
        select.appendChild(op);
        console.log(op.id);
    
  })
    const form = document.getElementById('form-id');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        cont++;
        console.log("clicks: " +cont);
        const arraydatos=[];
        const nombre = document.getElementById('Id-nombre');
        const mesa = document.getElementById('Id-mesa');
        const cantidad = document.getElementById('Id-cantidad');
        const table = document.querySelector('#table-id');

        console.log(nombre.value);
        console.log(mesa.value);
        console.log(select.value);
        console.log(cantidad.value);

        const agregar = document.querySelector('#tabla-pedidos');
        const trcerveza = document.createElement('tr');
        const thcerveza = document.createElement('th');
        const thcantidad = document.createElement('th');
        const theditar = document.createElement('th');
        const theliminar = document.createElement('th');
        const btneditar = document.createElement('button')
        const btneliminar = document.createElement('button')
        btneditar.id=cont;
        btneliminar.id=cont;
        
        btneditar.value="editar";
        btneditar.textContent="editar";
        btneditar.classList.add('btn');
        btneditar.classList.add('btn-warning');

        btneliminar.value="eliminar";
        btneliminar.textContent="eliminar";
        btneliminar.classList.add('btn');
        btneliminar.classList.add('btn-danger');

        thcerveza.id=cont;
        thcantidad.id=cont;
        thcerveza.id=cont;
        theditar.id=cont;
        theliminar.id=cont;

        theditar.appendChild(btneditar);
        theliminar.appendChild(btneliminar);
        thcerveza.textContent=nombre.value;
        thcantidad.textContent=cantidad.value;
        agregar.appendChild(trcerveza);
        agregar.appendChild(thcerveza);
        agregar.appendChild(thcantidad);
        agregar.appendChild(theditar);
        agregar.appendChild(theliminar);

        btneliminar.addEventListener('click', function(b) {
          const botonseleccionado = b.target.id;
          console.log("Boton con id: "+botonseleccionado);

          const filas2 = agregar.querySelectorAll("th[id='"+botonseleccionado+"']");
          filas2.forEach((fila2) => {
          fila2.remove();
          });

        })

      })
        
      

        const ficha = document.getElementById('ficha');
        const lista = document.querySelector('#datos');
        const filas = document.createElement('li');
        
          filas.textContent=select.value;
          lista.appendChild(filas);
          
          select.addEventListener("change", function(){
            const idBuscado = select.value;
            const indice = todasLasCervezas.findIndex((cerveza) => cerveza.nombre === idBuscado);
            console.log(indice); 

            filas.id=indice;
            filas.innerHTML="<strong>" +todasLasCervezas[indice].nombre +"</strong></br>";
            filas.innerHTML+="Descripción: </br>" + todasLasCervezas[indice].descripcion;
            filas.innerHTML+="<img src='"+ todasLasCervezas[indice].imagen +"' width='150px' height='200px'></img>";
           
          })


   }
   
 
 
 }