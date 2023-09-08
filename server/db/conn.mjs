import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://16naidka:kaydnnaidoo1@cluster0.3ccfnzk.mongodb.net/" ; 
//console.log(connectionString);
//const connectionString = process.env.ATLAS_URI;
//console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("successfully connected to Db")
} catch(e) {
  console.error(e);
}



  let db = conn.db("apds");



  export default db; 