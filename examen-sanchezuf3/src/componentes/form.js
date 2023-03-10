export const form = {
   template:  ` <div class='container'><form id="form-id">
    <div class="mb-3" id="div">
      <label for="InputNombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="Id-nombre" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="InputFecha" class="form-label">Fecha</label>
      <input type="date" class="form-control" id="Id-fecha">
    </div>
    <div class="mb-3">
      <label for="InputEdad" class="form-label">Edad</label>
      <input type="text" class="form-control" id="Id-edad">
    </div>
    <button type="submit" id="Id-boton" class="btn btn-primary">Submit</button>
  </form><div><div id="ficha"><h3>Datos del jugador</h3><ul id="datos"></ul></div><table><tr id="table-id"></tr></table>`,
  script: ()=>{
    console.log('Vista prueba cargada');

    const form = document.getElementById('form-id');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const arraydatos=[];
        const nombre = document.getElementById('Id-nombre');
        const fecha = document.getElementById('Id-fecha');
        const edad = document.getElementById('Id-edad');

        console.log(nombre.value);
        console.log(fecha.value);
        console.log(edad.value);

        const bton= document.createElement('button');

        arraydatos[0] = nombre.value;
        arraydatos[1] = fecha.value;
        arraydatos[2] = edad.value;
        arraydatos[2] = bton;


        const ficha = document.getElementById('ficha');
        const lista = document.querySelector('#datos');

        arraydatos.forEach(dato => {
          const liFicha = document.createElement('li'); 
          liFicha.textContent= dato;
          lista.appendChild(liFicha);
        }

        )

        const table = document.querySelector('#table-id');
        arraydatos.forEach(dato => {

          const filas = document.createElement('td');
          

          filas.textContent=dato;

          table.appendChild(filas);
          
          

        })

        
    });

    

  }


}