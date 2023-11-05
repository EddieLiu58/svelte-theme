import { pool } from "@lib/db";

async function getInfo(ip: string | null) {
    ip = "220.137.8.95";
    const client = await pool.connect();
    const { rows } = await client.query(
        "SELECT * FROM ipv4_map WHERE $1::inet << ip_network;",
        [ip]
    );
    client.release();
    return rows.length != 0 ? rows[0] : {};
}
export default getInfo;
