// console.table(data);
const containerPersonajes = document.getElementById('personajes-harry-potter');

const pintarPersonajes = (arr, elementoHTML) => {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += `<div class="personaje">
                <p>Nombre: ${arr[i].name}</p>
                <p>Género: ${arr[i].gender}</p>
              </div>`;
  }
  elementoHTML.innerHTML = string;
};

pintarPersonajes(potter.modificarNombres(data), containerPersonajes);
