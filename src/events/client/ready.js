const client = require('../../index');
const colors = require('colors');

module.exports = {
    name: "ready"
};

client.once('ready', async () => {
    console.log(`[READY] ${client.user.tag} is up and ready to go.`.rainbow.bold)
    console.log("----------------------------------------".white.bold);
})

//==========================================================\\
//======================| Coded By ASH#0765 |=====================\\
//==========================================================\\
//=======================| ASH Devlopment  |======================\\
//===================| https://discord.io/ASH_Codez |===================\\
//===========================================================\\