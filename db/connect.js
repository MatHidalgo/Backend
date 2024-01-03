const mongoose = require("mongoose");
mongoose.set("strictQuery", false);  // se requiere porque la ultima version viene por default en true
require("dotenv").config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB); // el string lo consiguo en mongodb >> database >> compass >> i Have MongoDB Compass installed
        console.log('base de datos conectada');
    } catch {
        console.log('error al conectarse con la base de datos');
    }
};
module.exports = { connect };