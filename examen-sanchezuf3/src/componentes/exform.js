import { cervezas } from '../bd/bd'
export const exform = {
    template:  ` <div class='container'>
    <div class="row">
    <div class="col-6">
      <form id="form-id" class="needs-validation" novalidate">
      <div class="mb-3" id="div">
        <label for="InputNombre" class="form-label">Nombre del grupo</label>
        <input type="text" class="form-control" id="Id-nombre" aria-describedby="emailHelp" required>
      <div class="invalid-feedback">
        Por favor, introduce un nombre de grupo válido.
      </div>
      </div>
      <div class="mb-3">
    <label for="InputFecha" class="form-label">Mesa</label>
      <input type="number" class="form-control" id="Id-mesa" aria-describedby="mesaHelp" required>
    <div class="invalid-feedback">
       Por favor, introduce un número de mesa válido.
    </div>
    </div>
      <div class="mb-3">
        <select id="Id-select">
              
        </select>
      </div>
      <div class="mb-3">
        <label for="InputCantidad" class="form-label">¿Cuantas te traigo?</label>
      <input type="number" class="form-control" id="Id-cantidad" aria-describedby="cantidadHelp" required>
      <div class="invalid-feedback">
        Por favor, introduce una cantidad válida.
      </div>
    </div>
      <button type="submit" id="Id-boton" class="btn btn-primary">Enviar</button>
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
    //COPIA DEL ARRAY CERVEZAS A TODAS LAS CERVEZAS
    const todasLasCervezas = cervezas.slice();
    //OBTENEMOS EL SELECT, RECORREMOS EL ARRAY TODAS LAS CERVEZAS CREAMOS ELEMENTO OPTION Y
    //LE AÑADIMOS LOS DATOS A CADA OPCION CON CADA ELEMENTO DEL ARRAY DE CERVEZAS Y LO AÑADIMOS DENTRO DEL SELECT
    const select = document.querySelector('#Id-select')
    let cont=0;
    todasLasCervezas.forEach(e => {
        const op = document.createElement('option');
        op.value= e.nombre;
        op.text=e.nombre;
        op.id=e.id;
        select.appendChild(op);
        console.log(op.id);
    
  })
  //OBTENEMOS EL BOTON ENVIAR Y EL FORMULARIO, CUANDO ENVÍAN EL FORM ACTUALIZAMOS EL NOMBRE POR SI PREVIAMENTE HAN UTILIZADO EL BOTON EDITAR 
  //CREAMOS UN CONTADOR QUE SERÁ EL ID DE CADA PEDIDO Y OBTENEMOS LOS ELEMENTOS NECESARIOS PARA OBTENER LOS DATOS DEL FORM.
    const sub = document.getElementById('Id-boton');
    const form = document.getElementById('form-id');
    form.addEventListener('submit', function(e) {
        sub.textContent="Enviar";
        e.preventDefault();
        cont++;
        console.log("clicks: " +cont);
        
        const nombre = document.getElementById('Id-nombre');
        const mesa = document.getElementById('Id-mesa');
        const cantidad = document.getElementById('Id-cantidad');
        const table = document.querySelector('#table-id');

  
//SELECCIONAMOS EL ELEMENTO DONDE SE INYECTARAN LOS PEDIDOS, CREAMOS LAS FILAS CON LOS CAMPOS Y BOTONES NECESARIOS PARA EL PEDIDO
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

 //AÑADIMOS EL VALOR, EL TEXTO E ID A CADA ELEMENTO QUE SE INYECTARÁ EN LA TABLA       

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

//LOS AÑADIMOS AL HTML

        theditar.appendChild(btneditar);
        theliminar.appendChild(btneliminar);
        thcerveza.textContent=select.value;
        thcantidad.textContent=cantidad.value;
        agregar.appendChild(trcerveza);
        agregar.appendChild(thcerveza);
        agregar.appendChild(thcantidad);
        agregar.appendChild(theditar);
        agregar.appendChild(theliminar);

//LISTENER PARA DETECTAR EL CLICK SOBRE CADA BOTON DE ELIMINAR, OBTENDRÁ EL ID Y SELECCIONARÁ TODOS LOS CAMPOS DE LA TABLA CON EL MISMO ID PARA ELIMINAR

        btneliminar.addEventListener('click', function(b) {
          const botonseleccionado = b.target.id;
          console.log("Boton con id: "+botonseleccionado);

          const filas2 = agregar.querySelectorAll("th[id='"+botonseleccionado+"']");
          filas2.forEach((fila2) => {
          fila2.remove();
          });

        })


        btneditar.addEventListener('click', function(r) {
          const botonseleccionado2 = r.target.id;
          console.log("Boton con id: "+botonseleccionado2);
          const obtener2 = agregar.querySelectorAll("[id='"+botonseleccionado2+"']");
          console.log(obtener2[0].textContent);
          select.value=obtener2[0].textContent;
          cantidad.value=obtener2[1].textContent
          const sub = document.getElementById('Id-boton');
          sub.textContent = "Actualizar";
          obtener2.forEach((o) => {
            o.remove();
            })

        })

        

      })
        
      

        const ficha = document.getElementById('ficha');
        const lista = document.querySelector('#datos');
        const filas = document.createElement('li');
        let contmau = 0;
        if(contmau==0){
          
          const idBuscado = select.value;
          const indice = todasLasCervezas.findIndex((cerveza) => cerveza.nombre === idBuscado);
          console.log(indice);
          filas.textContent=select.value;
          filas.id=indice;
          filas.innerHTML="<strong>" +todasLasCervezas[0].nombre +"</strong></br>";
          filas.innerHTML+="Descripción: </br>" + todasLasCervezas[0].descripcion;
          filas.innerHTML+="<img src='"+ todasLasCervezas[0].imagen +"' width='150px' height='200px'></img>";
          contmau = contmau+1;
        }else{}
          lista.appendChild(filas);
          
          select.addEventListener("change", function(){
            const idBuscado2 = select.value;
            const indice2 = todasLasCervezas.findIndex((cerveza) => cerveza.nombre === idBuscado2);
            filas.id=indice2;
            filas.innerHTML="<strong>" +todasLasCervezas[indice2].nombre +"</strong></br>";
            filas.innerHTML+="Descripción: </br>" + todasLasCervezas[indice2].descripcion;
            filas.innerHTML+="<img src='"+ todasLasCervezas[indice2].imagen +"' width='150px' height='200px'></img>";
           
          })


   }
   
 
 
 }