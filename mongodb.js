// CRUD
// create, read, update, delete

const { MongoClient, ObjectID } = require('mongodb');

const connection_url = 'mongodb://127.0.0.1:27017';
const database_name = 'task-manager';

MongoClient.connect(
  connection_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(database_name);

    db.collection('tasks')
      .deleteOne({ description: 'Buy bananas' })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
);
