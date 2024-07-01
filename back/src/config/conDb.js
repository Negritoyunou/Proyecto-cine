require('dotenv').config();

const mongoose = require('mongoose');


const conDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DataBase connected successfully');
    } catch (error) {
        console.log('Error al conectar a la base de datos:', error);
    }
};

module.exports = conDb;