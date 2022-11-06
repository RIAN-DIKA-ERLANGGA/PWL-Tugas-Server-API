import { Sequelize } from "sequelize";

const db = new Sequelize('novelstation','root','',{
    host : 'localhost',
    dialect: 'mysql'

});

export default db;