const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const title = event.queryStringParameters.title;
  const apiKey = process.env.OMDB_API_KEY;

  const url = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
