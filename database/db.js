const sql = require('mssql');
let conexion = {};

conexion = {
    user: process.env.DB_USER,
    password : process.env.DB_PASS,
    server: process.env.DB_HOST,
    port: process.env.DB_NAME, 
    database : process.env.DB_DATABASE, 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

conectarDB();
 
async function conectarDB() {
    
      try {
        let pruebaConexion = await sql.connect(conexion);
        if (pruebaConexion) {
          let pool = pruebaConexion; 
          console.log('success');
          return pool;
        } 
      } catch (error) {
        console.log(error);
      }
    } 
  

module.exports = conexion;