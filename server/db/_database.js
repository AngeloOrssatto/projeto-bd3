const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '666ricoestamos',
    host: 'localhost',
    port: 5432,
    database: 'ProjetoBD-EscolaMusica'
});

module.exports = pool;