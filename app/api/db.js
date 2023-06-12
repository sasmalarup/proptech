import mysql from "mysql2/promise";
export async function query({ query, values = [] }) {
    // PlanetScale;
    // const dbconnection = await mysql.createConnection(
    //   process.env.MYSQL_DATABASE_URL
    // );
  
    
    const dbconnection = await mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE
    });
  
    try {
      const [results] = await dbconnection.execute(query, values);
      dbconnection.end();
      return results;
    } catch (error) {
      throw Error(error.message);
      return { error };
    }
  }