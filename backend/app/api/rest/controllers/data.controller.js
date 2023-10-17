const axios = require('axios');

const getHumans = async (req, res) => {
    try {
      let allHumans = [];
      let page = 1;
      let totalPages = 1;
  
      while (page <= totalPages) {
        const response = await axios.post('https://rickandmortyapi.com/graphql', {
          query: `
            {
              characters(page: ${page}, filter: { species: "Human" }) {
                info {
                  pages
                }
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
  
        const data = response.data.data.characters;
  
        allHumans.push(...data.results);
  
        page++;
        totalPages = data.info.pages;
      }
  
      res.status(200).json(allHumans);
    } catch (error) {
      console.error('Error al obtener datos de la API de GraphQL', error);
      res.status(500).json({ error: 'Error al obtener datos de la API de GraphQL' });
    }
  };

module.exports = { getHumans }