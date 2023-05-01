const mongoose = require('mongoose');
const config = require('../config/config.json')
const colors = require('colors')

async function connect() {
    mongoose.connect(config.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
        console.log("----------------------------------------".yellow);
        console.log(`[MONGO] Connected to Database`.green.bold)
    });
    return;
}

module.exports = connect
//==========================================================\\
//======================| Coded By ASH#0765 |=====================\\
//==========================================================\\
//=======================| ASH Devlopment  |======================\\
//===================| https://discord.io/ASH_Codez |===================\\
//===========================================================\\