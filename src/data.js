// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const modificarNombres = (data) => {
  const newArr = [];
  for (let i = 0; i < data.length; i++) {
    newArr.push(Object.assign({}, data[i]));
    newArr[i].name = data[i].name.toUpperCase();
  } 
  return newArr; 
};

const calcular = () => {};

window.potter = {
  modificarNombres,
  calcular
};

// 1 Potter sea un objeto
 // 1.1 modificarNombres sea una función
    // retorne un nuevo array