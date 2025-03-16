import * as SQLite from 'expo-sqlite';
import {Place} from "./models/models-and-types";

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
    } catch (err) {
        throw err
    }
}

export const insertPlace = async (place: Place) => {
    try {
        await database.runAsync(`
            INSERT INTO places (title, image_uri, latitude, longitude, address)
            VALUES (?, ?, ?, ?, ?);
        `, place.title, place.imageUri, place.location.latitude, place.location.longitude, place.address);
    } catch (err) {
        throw err;
    }
}