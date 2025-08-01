const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {
  const { title } = event.queryStringParameters;
  const apiKey = process.env.OMDB_API_KEY;

  if (!title) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing movie title" }),
    };
  }

  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch movie data" }),
    };
  }
};
