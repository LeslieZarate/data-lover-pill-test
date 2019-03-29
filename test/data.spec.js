require('../src/data.js');

const input = [
  {name: 'Argus Filch', house: '', hogwartsStudent: false }, 
  {name: 'Arthur Weasley', house: 'Gryffindor', hogwartsStudent: false}, 
  {name: 'Bellatrix Lestrange', house: 'Slytherin', hogwartsStudent: false}, 
  {name: 'Cedric Diggory', house: 'Hufflepuff', hogwartsStudent: true},
  {name: 'Cho Chang', house: 'Ravenclaw', hogwartsStudent: true},
];

const output1 = [
  {name: 'ARGUS FILCH', house: '', hogwartsStudent: false}, 
  {name: 'ARTHUR WEASLEY', house: 'Gryffindor', hogwartsStudent: false}, 
  {name: 'BELLATRIX LESTRANGE', house: 'Slytherin', hogwartsStudent: false}, 
  {name: 'CEDRIC DIGGORY', house: 'Hufflepuff', hogwartsStudent: true},
  {name: 'CHO CHANG', house: 'Ravenclaw', hogwartsStudent: true}
];

describe('Potter', () => {
  it('es un objeto', () => {
    expect(typeof potter).toBe('object');
  });
  describe('modificarNombres', () => {
    it('es una función', () => {
      expect(typeof potter.modificarNombres).toBe('function');
    });
    it('retorna un array con todos sus elementos y el valor de la propiedad name en mayusculas', () => {
      expect(potter.modificarNombres(input)).toEqual(output1);
    });
    it('retorna un nuevo array', ()=> {
      expect(potter.modificarNombres(input)).not.toBe(output1);
    });
  });
});
