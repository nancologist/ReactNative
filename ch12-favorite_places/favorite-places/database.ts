import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabaseSync('favorite-places.db');

export const initDb = async () => {
    try {
        await database.withExclusiveTransactionAsync(async (transaction) => {
            transaction.execSync(`
                CREATE TABLE IF NOT EXISTS places
                (
                    id        INTEGER PRIMARY KEY,
                    title     TEXT NOT NULL,
                    image_uri TEXT NOT NULL,
                    latitude  REAL NOT NULL,
                    longitude REAL NOT NULL,
                    address   TEXT NOT NULL -- you could compute address from latitude and longitude when querying the data from the database, but I store it here to spare the reverse geocoding from google and so reduce my Google bills!
                );

            `);
        });
    } catch (e) {

    }
}