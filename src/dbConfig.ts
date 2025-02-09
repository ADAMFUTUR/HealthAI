import { createConnection } from 'mysql2/promise';

const connection = createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  // database: 'your_database_name' // Comment this out for now
});

// Function to create a new database
const createDatabase = async (dbName: string) => {
  const sql = `CREATE DATABASE IF NOT EXISTS ${dbName};`;
  try {
    await connection.query(sql);
    console.log(`Database ${dbName} created or already exists.`);
  } catch (err) {
    console.error('Error creating database:', err);
  }
};

// Call the function to create the database
createDatabase('your_database_name'); // Replace with your desired database name

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

export default connection;