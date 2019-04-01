//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client)=>{
  if(err)
  return console.log('Unable to connect to mongodb server');

  console.log("Connected to mongodb server");

  const db=client.db('TodoApp');
  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log("Todos:",count);
  //
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name: "Aman"}).toArray().then((docs)=>{
    console.log('Users:');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch database',err);
  });
  //client.close();
});
