const mongoose = require('mongoose');

async function db() {
    try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
    if(conn) {
        console.log(`Connection has been established via host: ${conn.connection.host}`);
    }
    } catch(err) {
        console.error(err);
    }
}

module.exports = db;