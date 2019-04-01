//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client)=>{
  if(err)
  return console.log('Unable to connect to mongodb server');

  console.log("Connected to mongodb server");

  const db=client.db('TodoApp');
  // db.collection('Todos').deleteMany({text: "Hello World"}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: "Hello World"}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
    console.log(result);
  });
  //client.close();
});
