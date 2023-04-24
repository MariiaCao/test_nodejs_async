/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

const axios = require('axios');

async function fnTest() {
  let url = 'https://jsonplaceholder.typicode.com/posts/1';
  let response = await axios({
    method: 'put',
    url: url,
    data: {
      "id": "101"
    }
  })
  return response;
}

module.exports = fnTest;