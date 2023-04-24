const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const axios = require('axios');
async function fnTest() {
  let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return data.length;
}

module.exports = fnTest;