const { Sequelize } = require('sequelize');

// Passing Connection URI for Heroku database.
const sequelize = new Sequelize('mysql://b9addf46a6088a:37013dc5@us-cdbr-iron-east-01.cleardb.net/heroku_f1ce0f6d818e9f1?reconnect=true') // 

const dbFunc = async ()=> { 
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


dbFunc();