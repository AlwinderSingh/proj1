const { Pool, Client } = require('pg')
const conn="postgres://database_yogaflex_user:88IZWitXxFzISI1evKkaT6CDMYm3Zwlz@dpg-ceasm0da4996mecfcls0-a.oregon-postgres.render.com/database_yogaflex"
const conn2="postgres://database_yogaflex_user:88IZWitXxFzISI1evKkaT6CDMYm3Zwlz@dpg-ceasm0da4996mecfcls0-a/database_yogaflex"
const db = new Client({
    conn2,
    })
module.exports= db