require('dotenv').config()

const express = require('express')
const cors = require('cors');

const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require('./api/graphql/schemas/character.schema');
const { resolvers } = require('./api/graphql/resolvers/resolver');
const { corsOptions } = require('./utils/config');

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/v1', require('./api/rest/routes/index'))

async function start() {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      formatError: (error) => {
        if (error.extensions.code === "GRAPHQL_VALIDATION_FAILED") {
          return {
            message: "Error de validación de GraphQL",
            locations: error.locations,
            path: error.path,
          };
        }
    
        console.error(error); 
        return error;
      },
    });
  
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: "/graphql" });
  
    app.use((err, req, res, next) => {
        console.error(err); 
        res.status(500).json({ message: "Ocurrió un error interno en el servidor" });
      });

    app.use((req, res, next) => {
      res.status(404).send("not found");
    });
  
    app.listen(process.env.PORT || 3000, () =>
      console.log("Server on port", process.env.PORT || 3000)
    );
  }
  
start();