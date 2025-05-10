import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Wahedbatata23',
    database: 'danegg',
});

export default pool;
