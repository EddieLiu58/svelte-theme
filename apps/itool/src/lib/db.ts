// import { Pool } from "pg";
import * as dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
dotenv.config();
export const pool = new Pool({
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: 5432,
});
