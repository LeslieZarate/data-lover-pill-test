# Manipulando Data con JavaScript

Cuando trabajas en proyectos de JavaScript, inevitablemente te encuentrarás con
situaciones en las que tiene que hacer algo de manipulación de datos.
Inicialmente cuando empezamos, lo hacemos con lo `for-loops`.
Aquí hay un ejemplo:

## Mutable / Referencia

Integridad referencial e inmutabilidad
[asignacion por valor - referencia](https://medium.com/laboratoria-developers/por-valor-vs-por-referencia-en-javascript-de3daf53a8b9)

### Reglitas - arreglos

Map : Si ya tengo una arreglo y quiero hacer exactamente la misma operación en cada uno de los elementos de la matriz y devolver la misma cantidad de elementos en la arreglo.

Filter: Si ya tengo una arreglo pero solo quiero tener elementos en la arreglo que coincidan con ciertos criterios, use el filtro.

Reduce : Si ya tengo una arreglo, pero quiero usar los valores de ese arreglo para crear algo completamente nuevo

[return implicito](https://jaketrent.com/post/javascript-arrow-function-return-rules/)

## Reglitas - objetos

| Métodos  |  
|-------------|
| hasOwnProperty |
| Object.keys |
| Object.assign|

### Features

- Quiero que los nombres de todos los items de mi arreglo se muestren siempre en mayúsculas.
- Quiero asignar la propiedad insignia a todos los estudiantes de hogwarts
- Quiero que todos los items de mi arreglo tengan la propiedad edad y su valor respectivo
- Quiero un array cuyos elementos sean las casas
- Quiero poder agrupar la data por genero

#### Test

```bash
npm run test -- --watch
```