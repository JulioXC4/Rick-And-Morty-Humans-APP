const axios = require('axios');

/* const resolvers = {
  Query: {
    characters: async () => {
      try {
        const response = await axios.post('https://rickandmortyapi.com/graphql', {
          query: `
            query {
              characters(filter: { species: "Human" }) {
                results {
                  id
                  name
                  species
                }
              }
            }
          `,
        });

        return response.data.data.characters.results;
      } catch (error) {
        throw error;
      }
    },
  },
};
 */

const books = [
    { id: "1", title: "Book 1", author: "Author 1" },
    { id: "2", title: "Book 2", author: "Author 2" },
    { id: "3", title: "Book 3", author: "Author 3" },
  ];
  
  const resolvers = {
    Query: {
      books: () => books,
    },
  }; 

module.exports = {resolvers};
