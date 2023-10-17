const axios = require('axios');

const getHumans = async (req, res) => {
    try {
        const response = await axios.post('https://rickandmortyapi.com/graphql', {
          query: `{
            characters(filter: { species: "Human" }) {
              results {
                id
                name
                species
                status
                type
                gender
                origin {
                  name
                }
                location {
                    name
                }
                image
              }
            }
          }
          `,
        });
    
        res.status(200).json(response.data.data.characters.results);
      } catch (error) {
        console.error('Error al obtener datos de la API de GraphQL', error);
        res.status(500).json({ error: 'Error al obtener datos de la API de GraphQL' });
      }
}

module.exports = { getHumans }