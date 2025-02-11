import cors from "cors";
import express from "express";
import { config } from './config/index.js';
import { ApolloServer } from '@apollo/server'
import { sequelize } from "./services/graphqlDB.js";
import { expressMiddleware } from '@apollo/server/express4'
import { resolvers } from "./utils/resolvers/Person.js";
import { typeDefs } from "./utils/defs/Person.js";

const server = new ApolloServer({
    typeDefs, resolvers
})

async function startServer() {
    await server.start();

    const app = express();

    app.use(cors())
    app.use(express.json());

    app.use('/', expressMiddleware(server));

    sequelize.sync().then(() => {

        app.listen(config.PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${config.PORT}`)
            console.log("✅ Conexión a MySQL exitosa");;
        })
    }).catch((error) => {
        console.error("❌ Error al conectar a MySQL:", error.message);
    });
}

startServer();