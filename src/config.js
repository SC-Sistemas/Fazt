const {config} = require('dotenv');
config();

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        database: process.env.DB_NAME
    }
}