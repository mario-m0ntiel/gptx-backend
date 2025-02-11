import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { config } from "../config/index.js";

dotenv.config();

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: false, // Evita logs innecesarios en producción
});

export { sequelize };