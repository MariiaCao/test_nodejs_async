/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/id
- Return: "data" 
- Contenido del return data:
{
   "id": 50
}
 NOTA: se envia el "id" por parámetro con valor 50
*/
const fetch = require('cross-fetch');

async function fnTest(id) {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
    method: 'put'

  });

  return data;
}


module.exports = fnTest;