require('dotenv').config()
const Sequalize = require('sequelize')



const db =  new Sequalize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host:process.env.POSTGRES_HOST,
        port:process.env.POSTGRES_PORT,
        dialect:process.env.POSTGRES_DIALECT
    }
)


const checkDbConnection = async function(){
    try {
        await db.authenticate()
        console.log('Db is working');     
    } catch (error) {
        throw Error(error)
    }
}

checkDbConnection()

exports.db = db