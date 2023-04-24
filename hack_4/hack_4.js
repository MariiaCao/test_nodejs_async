/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PATCH
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/

const axios = require('axios');

async function fnTest() {
  let response = await axios({
    method: "PATCH",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    data: {
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      userId: 1,
    }
  });
  return response;
}

module.exports = fnTest;