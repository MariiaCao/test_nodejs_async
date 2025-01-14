/*
- Mediante la libreria: axios
- Hacer una petición de tipo: DELETE
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/
const axios = require('axios');

async function fnTest() {
  let response = await axios({
    method: "DELETE",
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });
  return response;
}

module.exports = fnTest;