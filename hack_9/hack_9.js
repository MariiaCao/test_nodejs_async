/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const axios = require('axios');
async function fnTest() {
  let {data} = await axios.post('https://jsonplaceholder.typicode.com/posts/', {"id":"1"});

  return data;
}

module.exports = fnTest;