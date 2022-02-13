const axios = require('axios');

exports.handler = async function (event, context) {
  const { data } = await axios.get('https://swapi.dev/api/people/1');

  return {
    body: data,
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};
