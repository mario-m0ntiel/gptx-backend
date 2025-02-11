import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,

    // MYSQL
    DB_NAME:process.env.DB_NAME,
    DB_USER:process.env.DB_USER,
    DB_PASS:process.env.DB_PASS,
    DB_HOST:process.env.DB_HOST,
    DB_DIALECT:process.env.DB_DIALECT
}

export {
    config
}